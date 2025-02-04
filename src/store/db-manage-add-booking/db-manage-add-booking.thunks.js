import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";
import {
  availablilityCollectionId,
  catteryInfoCollectionId,
  databaseId,
} from "../../constants/constants";
import { hasSufficientCapacity } from "./add-booking-functions";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getAllowsLargerPensBoolAsync = createAsyncThunk(
  "getAllowsLargerPensBool",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents } = usersCustomers;
      console.log(documents);

      const catteryDoc = documents[0];

      if (catteryDoc.length) {
        throw new Error("Couldn't Find Cattery Document");
      }

      const catteryAllowsLargerPensBool =
        catteryDoc.catteryAllowsLargerPensBool;

      if (
        catteryAllowsLargerPensBool === undefined ||
        catteryAllowsLargerPensBool === null
      ) {
        throw new Error("Couldn't Find The AllowsLargerPens Bool");
      }

      return catteryAllowsLargerPensBool;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkBookingAvailabilityAsync = createAsyncThunk(
  "checkBookingAvailability",
  async (
    { dbManageAddBookingData, catteryId, catteryAllowsLargerPensBool },
    thunkAPI
  ) => {
    try {
      const {
        checkInDate,
        checkOutDate,
        catsInBooking,
        checkInSlot,
        checkOutSlot,
      } = dbManageAddBookingData;

      const numberOfCats = catsInBooking.length;

      const availabilityQuery = [
        Query.equal("catteryId", catteryId),
        Query.greaterThanEqual("date", checkInDate),
        Query.lessThanEqual("date", checkOutDate),
      ];

      const availabilityResponse = await databases.listDocuments(
        databaseId,
        availablilityCollectionId,
        availabilityQuery
      );

      const { documents } = availabilityResponse;

      const hasCheckInDateDoc = documents.some(
        (doc) => doc.date === checkInDate
      );
      const hasCheckOutDateDoc = documents.some(
        (doc) => doc.date === checkOutDate
      );

      // do docs for the dates in the db.
      if (!hasCheckInDateDoc && hasCheckOutDateDoc) {
        throw new Error("noCheckInDate");
      } else if (hasCheckInDateDoc && !hasCheckOutDateDoc) {
        throw new Error("noCheckOutDate");
      } else if (!hasCheckInDateDoc && !hasCheckOutDateDoc) {
        throw new Error("noCheckInOrOutDate");
      }

      const parsedAvailabilityData = documents.map((day) => ({
        date: day.date,
        morningPens: JSON.parse(day.morningPensData),
        afternoonPens: JSON.parse(day.afternoonPensData),
      }));

      const failingDates = [];

      // error if pend data not correct - first day pm not being added to array.
      const firstDay = parsedAvailabilityData[0];
      const firstDayMorningFail =
        checkInSlot === "am" &&
        (!hasSufficientCapacity(
          firstDay.morningPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        ) ||
          !hasSufficientCapacity(
            firstDay.afternoonPens,
            numberOfCats,
            catteryAllowsLargerPensBool
          ));

      const firstDayAfternoonFail =
        checkInSlot === "pm" &&
        !hasSufficientCapacity(
          firstDay.afternoonPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        );

      if (firstDayMorningFail) {
        failingDates.push({
          id: crypto.randomUUID(),
          date: firstDay.date,
          slot: "am",
          failedPens: [
            ...firstDay.morningPens.filter(
              (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
            ),
            ...firstDay.afternoonPens.filter(
              (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
            ),
          ],
        });
      }

      if (firstDayAfternoonFail) {
        failingDates.push({
          id: crypto.randomUUID(),
          date: firstDay.date,
          slot: "pm",
          failedPens: firstDay.afternoonPens.filter(
            (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
          ),
        });
      }

      const middleDays = parsedAvailabilityData.slice(1, -1);
      middleDays.forEach((day) => {
        const morningFail = !hasSufficientCapacity(
          day.morningPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        );
        const afternoonFail = !hasSufficientCapacity(
          day.afternoonPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        );

        if (morningFail) {
          failingDates.push({
            id: crypto.randomUUID(),
            date: day.date,
            slot: "am",
            failedPens: day.morningPens.filter(
              (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
            ),
          });
        }
        if (afternoonFail) {
          failingDates.push({
            id: crypto.randomUUID(),
            date: day.date,
            slot: "pm",
            failedPens: day.afternoonPens.filter(
              (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
            ),
          });
        }
      });

      const lastDay = parsedAvailabilityData[parsedAvailabilityData.length - 1];

      const lastDayMorningFail =
        checkOutSlot === "am" &&
        !hasSufficientCapacity(
          lastDay.morningPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        );

      const lastDayAfternoonFail =
        checkOutSlot === "pm" &&
        (!hasSufficientCapacity(
          lastDay.morningPens,
          numberOfCats,
          catteryAllowsLargerPensBool
        ) ||
          !hasSufficientCapacity(
            lastDay.afternoonPens,
            numberOfCats,
            catteryAllowsLargerPensBool
          ));

      if (lastDayMorningFail) {
        failingDates.push({
          id: crypto.randomUUID(),
          date: lastDay.date,
          slot: "am",
          failedPens: lastDay.morningPens.filter(
            (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
          ),
        });
      }

      if (lastDayAfternoonFail) {
        failingDates.push({
          id: crypto.randomUUID(),
          date: lastDay.date,
          slot: "pm",
          failedPens: lastDay.afternoonPens.filter(
            (pen) => pen.maxCatCapacity < numberOfCats || pen.available <= 0
          ),
        });
      }

      const isBookingAvailable = failingDates.length === 0;

      if (!isBookingAvailable) {
        return {
          status: "bookingNotAvailable",
          failingDates,
        };
      }

      return { status: "bookingAvailable" };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

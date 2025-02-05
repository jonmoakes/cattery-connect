import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";
import {
  availablilityCollectionId,
  catteryInfoCollectionId,
  databaseId,
} from "../../constants/constants";
import {
  specialCheckSameDay,
  checkFirstDayAvailability,
} from "./day-and-slot-checks/check-first-day-availability";
import { checkMiddleDaysAvailability } from "./day-and-slot-checks/check-middle-days-availability";
import { checkLastDayAvailability } from "./day-and-slot-checks/check-last-day-availability";
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

      let failingDates = [];

      if (checkInDate == checkOutDate) {
        failingDates = specialCheckSameDay(
          parsedAvailabilityData,
          numberOfCats,
          catteryAllowsLargerPensBool,
          failingDates
        );
      } else {
        failingDates = checkFirstDayAvailability(
          parsedAvailabilityData,
          numberOfCats,
          catteryAllowsLargerPensBool,
          checkInSlot,
          failingDates
        );

        failingDates = checkMiddleDaysAvailability(
          parsedAvailabilityData,
          numberOfCats,
          catteryAllowsLargerPensBool,
          failingDates
        );

        failingDates = checkLastDayAvailability(
          parsedAvailabilityData,
          numberOfCats,
          catteryAllowsLargerPensBool,
          checkOutSlot,
          failingDates
        );
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

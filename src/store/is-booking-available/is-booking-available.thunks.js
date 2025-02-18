import { createAsyncThunk } from "@reduxjs/toolkit";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";
import {
  availablilityCollectionId,
  catteryNotAvailableOnThisDateString,
  databaseId,
} from "../../constants/constants";
import { eachDayOfInterval, format } from "date-fns";
import {
  specialCheckSameDay,
  checkFirstDayAvailability,
} from "./day-and-slot-checks/check-first-day-availability";
import { checkMiddleDaysAvailability } from "./day-and-slot-checks/check-middle-days-availability";
import { checkLastDayAvailability } from "./day-and-slot-checks/check-last-day-availability";

export const checkBookingAvailabilityAsync = createAsyncThunk(
  "checkBookingAvailability",
  async ({ uploadBookingData, catteryId }, thunkAPI) => {
    try {
      const {
        checkInDate,
        checkOutDate,
        catsInBooking,
        checkInSlot,
        checkOutSlot,
      } = uploadBookingData;

      const numberOfCats = catsInBooking && catsInBooking.length;

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

      const getBookingDatesFromCheckInToCheckOutInclusive = () => {
        const daysArray = eachDayOfInterval({
          start: checkInDate,
          end: checkOutDate,
        });

        return daysArray.map((day) => format(day, "yyyy-MM-dd"));
      };

      const datesRequested = getBookingDatesFromCheckInToCheckOutInclusive();
      const missingDates = datesRequested.filter(
        (date) => !documents.some((doc) => doc.date === date)
      );

      if (missingDates.length > 0) {
        const formattedMissingDates = missingDates.map((missingDate) =>
          format(missingDate, "EEE d MMM yyyy")
        );

        throw new Error(
          `${catteryNotAvailableOnThisDateString}
  
  ${formattedMissingDates.join(",\n")}.`
        );
      }

      const parsedAvailabilityData = documents.map((day) => ({
        documentId: day.$id,
        date: day.date,
        morningPens: JSON.parse(day.morningPensData),
        afternoonPens: JSON.parse(day.afternoonPensData),
      }));

      let failingDates = [];

      if (checkInDate == checkOutDate) {
        failingDates = specialCheckSameDay(
          parsedAvailabilityData,
          numberOfCats,
          failingDates
        );
      } else {
        failingDates = checkFirstDayAvailability(
          parsedAvailabilityData,
          numberOfCats,
          checkInSlot,
          failingDates
        );

        failingDates = checkMiddleDaysAvailability(
          parsedAvailabilityData,
          numberOfCats,
          failingDates
        );

        failingDates = checkLastDayAvailability(
          parsedAvailabilityData,
          numberOfCats,

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

      return { status: "bookingAvailable", parsedAvailabilityData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

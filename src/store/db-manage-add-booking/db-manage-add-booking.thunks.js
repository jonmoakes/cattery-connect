import { createAsyncThunk } from "@reduxjs/toolkit";
import { databases } from "../../utils/appwrite/appwrite-config";
import { ID, Query } from "appwrite";
import {
  availablilityCollectionId,
  bookingsCollectionId,
  catteryInfoCollectionId,
  catteryNotAvailableOnThisDateString,
  databaseId,
  pensRollbackFailureErrorCode,
} from "../../constants/constants";
import {
  specialCheckSameDay,
  checkFirstDayAvailability,
} from "./day-and-slot-checks/check-first-day-availability";
import { checkMiddleDaysAvailability } from "./day-and-slot-checks/check-middle-days-availability";
import { checkLastDayAvailability } from "./day-and-slot-checks/check-last-day-availability";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { getSlotsToUpdate } from "./update-pen-availability/get-slots-to-update";
import { updateSlot } from "./update-pen-availability/update-slot";
import { eachDayOfInterval, format } from "date-fns";

export const getRequiredCatteryDataAsync = createAsyncThunk(
  "getRequiredCatteryData",
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

      const {
        catteryAllowsLargerPensBool,
        maximumCatsInSinglePen,
        pricePerNight,
        name,
        phone,
        email,
      } = catteryDoc;

      if (
        catteryAllowsLargerPensBool === undefined ||
        catteryAllowsLargerPensBool === null
      ) {
        throw new Error("Couldn't Find The catteryAllowsLargerPens Bool");
      }

      return {
        catteryAllowsLargerPensBool,
        maximumCatsInSinglePen,
        pricePerNight,
        name,
        phone,
        email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkBookingAvailabilityAsync = createAsyncThunk(
  "checkBookingAvailability",
  async (
    { addBookingData, catteryId, catteryAllowsLargerPensBool },
    thunkAPI
  ) => {
    try {
      const {
        checkInDate,
        checkOutDate,
        catsInBooking,
        checkInSlot,
        checkOutSlot,
      } = addBookingData;

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

      return { status: "bookingAvailable", parsedAvailabilityData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePensDataAsync = createAsyncThunk(
  "updatePensData",
  async (
    {
      parsedAvailabilityData,
      addBookingData,
      catteryAllowsLargerPensBool,
      operation,
    },
    thunkAPI
  ) => {
    // Deep copy the original availability data for rollback purposes
    const originalAvailabilityData = JSON.parse(
      JSON.stringify(parsedAvailabilityData)
    );
    try {
      const { catsInBooking, checkInSlot, checkOutSlot } = addBookingData;
      const numberOfCats = catsInBooking.length;
      const totalDays = parsedAvailabilityData.length;

      for (let index = 0; index < totalDays; index++) {
        const day = parsedAvailabilityData[index];

        let updatedMorningPens = day.morningPens;
        let updatedAfternoonPens = day.afternoonPens;

        const { shouldUpdateMorning, shouldUpdateAfternoon } = getSlotsToUpdate(
          index,
          totalDays,
          checkInSlot,
          checkOutSlot
        );

        if (shouldUpdateMorning) {
          updatedMorningPens = updateSlot(
            updatedMorningPens,
            catteryAllowsLargerPensBool,
            numberOfCats,
            operation
          );
        }
        if (shouldUpdateAfternoon) {
          updatedAfternoonPens = updateSlot(
            updatedAfternoonPens,
            catteryAllowsLargerPensBool,
            numberOfCats,
            operation
          );
        }

        const updatedData = {
          morningPensData: JSON.stringify(updatedMorningPens),
          afternoonPensData: JSON.stringify(updatedAfternoonPens),
        };

        await manageDatabaseDocument(
          "update",
          databaseId,
          availablilityCollectionId,
          day.documentId,
          updatedData
        );
      }
    } catch (error) {
      // Rollback to original availability data
      const rollbackFailures = [];

      for (const day of originalAvailabilityData) {
        const originalData = {
          morningPensData: JSON.stringify(day.morningPens),
          afternoonPensData: JSON.stringify(day.afternoonPens),
        };
        try {
          await manageDatabaseDocument(
            "update",
            databaseId,
            availablilityCollectionId,
            day.documentId,
            originalData
          );
        } catch {
          rollbackFailures.push(day.documentId);
        }
      }

      if (rollbackFailures.length > 0) {
        return thunkAPI.rejectWithValue({
          message: `there was an Error making booking..

( error code '${pensRollbackFailureErrorCode}' ). 

in order to avoid disruption to the booking system, please don't attempt to make any more bookings just yet.

due to the nature of the error, we require manual intervention. 

when you press 'send email' below, we will send an email to jonathan with details of the error. 

please confirm he has fixed the errors before attempting to make any more bookings.`,
          originalAvailabilityData,
          addBookingData,
          rollbackFailures,
          operation,
        });
      } else {
        // Rollback succeeded
        return thunkAPI.rejectWithValue(
          `${error} - failed to update pen data. no changes have been made the database.`
        );
      }
    }
  }
);

export const uploadBookingDataAsync = createAsyncThunk(
  "uploadBookingData",
  async ({ addBookingData, catteryId }, thunkAPI) => {
    try {
      const {
        catsInBooking,
        checkInDate,
        checkInSlot,
        checkOutDate,
        checkOutSlot,
        customerId,
        customerName,
      } = addBookingData;

      const data = {
        customerName,
        customerId,
        checkInDate,
        checkInSlot,
        checkOutDate,
        checkOutSlot,
        catsInBooking: catsInBooking.join(", "),
        catteryId,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        bookingsCollectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

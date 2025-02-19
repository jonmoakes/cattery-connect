import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSlotsToUpdate } from "./functions/get-slots-to-update";
import { updateSlot } from "./functions/update-slot";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import {
  availablilityCollectionId,
  databaseId,
  pensRollbackFailureErrorCode,
} from "../../constants/constants";

export const updatePensDataInDbAsync = createAsyncThunk(
  "updatePensDataInDb",
  async (
    { parsedAvailabilityData, uploadBookingData, operation },
    thunkAPI
  ) => {
    // Deep copy the original availability data for rollback purposes
    const originalAvailabilityData = JSON.parse(
      JSON.stringify(parsedAvailabilityData)
    );

    try {
      const { catsInBooking, checkInSlot, checkOutSlot } = uploadBookingData;
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
            numberOfCats,
            operation
          );
        }
        if (shouldUpdateAfternoon) {
          updatedAfternoonPens = updateSlot(
            updatedAfternoonPens,
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
          message: `there was an Error processing the booking..
  
  ( error code '${pensRollbackFailureErrorCode}' ). 
  
  in order to avoid disruption to the booking system, please don't attempt to make or cancel any more bookings just yet.
  
  due to the nature of the error, we require manual intervention. 
  
  when you press 'send email' below, we will send an email to jonathan with details of the error. 
  
  please confirm he has fixed the errors before attempting to make or cancel any more bookings.`,
          originalAvailabilityData,
          uploadBookingData,
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

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  availablilityCollectionId,
  bookingsCollectionId,
  databaseId,
} from "../../constants/constants";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

export const fetchAvailabilityDocsToUpdateAsync = createAsyncThunk(
  "fetchAvailabilityDocsToUpdate",
  async ({ dataFromBooking }, thunkAPI) => {
    try {
      const { catteryId, checkInDate, checkOutDate } = dataFromBooking;

      const availabilityQuery = [
        Query.equal("catteryId", catteryId),
        Query.greaterThanEqual("date", checkInDate),
        Query.lessThanEqual("date", checkOutDate),
      ];

      const documentsToUpdate = await databases.listDocuments(
        databaseId,
        availablilityCollectionId,
        availabilityQuery
      );

      const { documents } = documentsToUpdate;

      const parsedAvailabilityData = documents.map((day) => ({
        documentId: day.$id,
        date: day.date,
        morningPens: JSON.parse(day.morningPensData),
        afternoonPens: JSON.parse(day.afternoonPensData),
      }));

      return parsedAvailabilityData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBookingDataAsync = createAsyncThunk(
  "deleteBookingData",
  async ({ $id }, thunkAPI) => {
    try {
      await manageDatabaseDocument(
        "delete",
        databaseId,
        bookingsCollectionId,
        $id
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

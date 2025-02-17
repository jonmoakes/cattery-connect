import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  availablilityCollectionId,
  databaseId,
} from "../../constants/constants";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";

export const fetchAvailabilityDocsToUpdateAsync = createAsyncThunk(
  "fetchAvailabilityDocsToUpdate",
  async ({ dataForAvailabilityDocsRequest }, thunkAPI) => {
    try {
      const { catteryId, checkInDate, checkOutDate } =
        dataForAvailabilityDocsRequest;

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

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

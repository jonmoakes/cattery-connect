import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  customersCollectionId,
  standardRateLimit,
} from "../../constants/constants";

export const getAllOwnersCustomersAsync = createAsyncThunk(
  "getAllOwnersCustomers",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        customersCollectionId,
        queryIndex,
        queryValue,
        false,
        standardRateLimit
      );

      const { documents } = usersCustomers;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

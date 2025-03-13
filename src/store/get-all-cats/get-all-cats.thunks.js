import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  usersCollectionId,
  catsCollectionId,
  highRateLimit,
  smallRateLimit,
} from "../../constants/constants";

export const fetchAllCatsAsync = createAsyncThunk(
  "fetchAllCats",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const catteryCats = await listDocumentsByQueryOrSearch(
        databaseId,
        catsCollectionId,
        queryIndex,
        queryValue,
        false,
        highRateLimit
      );

      const { documents } = catteryCats;

      if (!documents.length) {
        return [];
      }
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCatsOwnerDetailsAsync = createAsyncThunk(
  "fetchCatsOwnerDetails",
  async ({ selectedCatsOwnerCustomerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = selectedCatsOwnerCustomerId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        usersCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = usersCustomers;

      if (!documents.length) {
        throw new Error("no owner found");
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

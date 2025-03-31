import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  catsCollectionId,
  smallRateLimit,
} from "../../constants/constants";

export const fetchIndividualCustomersCatsAsync = createAsyncThunk(
  "fetchIndividualCustomersCats",
  async ({ customerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const usersCustomersCats = await listDocumentsByQueryOrSearch(
        databaseId,
        catsCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = usersCustomersCats;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

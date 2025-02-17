import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  bookingsCollectionId,
  highRateLimit,
} from "../../constants/constants";

export const fetchOwnerBookingsAsync = createAsyncThunk(
  "fetchOwnerBookings",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const ownerBookings = await listDocumentsByQueryOrSearch(
        databaseId,
        bookingsCollectionId,
        queryIndex,
        queryValue,
        false,
        highRateLimit
      );

      const { documents } = ownerBookings;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

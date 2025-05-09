import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";
import {
  bookingsCollectionId,
  databaseId,
} from "../../constants/appwrite-constants";
import { highRateLimit } from "../../constants/api-request-constants";

export const fetchSignedInCustomersBookingsAsync = createAsyncThunk(
  "fetchSignedInCustomersBookings",
  async ({ customerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const customersBookings = await listDocumentsByQueryOrSearch(
        databaseId,
        bookingsCollectionId,
        queryIndex,
        queryValue,
        false,
        highRateLimit
      );

      const { documents } = customersBookings;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

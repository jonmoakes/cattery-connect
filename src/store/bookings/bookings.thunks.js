import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

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

export const updateBookingPaymentStatusAsync = createAsyncThunk(
  "updateBookingPaymentStatus",
  async ({ documentId }, thunkAPI) => {
    try {
      const documentToUpdate = await manageDatabaseDocument(
        "get",
        databaseId,
        bookingsCollectionId,
        documentId
      );

      const { paymentStatus } = documentToUpdate;

      const newValue = paymentStatus === "complete" ? "incomplete" : "complete";

      const dataToUpdate = {
        ["paymentStatus"]: newValue,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        bookingsCollectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

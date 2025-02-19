import { createAsyncThunk } from "@reduxjs/toolkit";

import { ID } from "appwrite";
import { bookingsCollectionId, databaseId } from "../../constants/constants";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { generateBookingId } from "../../functions/generate-short-id";

export const uploadBookingDataToDbAsync = createAsyncThunk(
  "uploadBookingDataToDb",
  async ({ uploadBookingData, catteryId }, thunkAPI) => {
    try {
      const {
        catsInBooking,
        checkInDate,
        checkInSlot,
        checkOutDate,
        checkOutSlot,
        customerId,
        customerName,
        customerEmail,
      } = uploadBookingData;

      const data = {
        bookingId: generateBookingId(),
        customerName,
        customerEmail,
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

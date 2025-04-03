import { createAsyncThunk } from "@reduxjs/toolkit";
import { differenceInDays } from "date-fns";
import { ID } from "appwrite";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import {
  bookingsCollectionId,
  databaseId,
} from "../../constants/appwrite-constants";

export const uploadBookingDataToDbAsync = createAsyncThunk(
  "uploadBookingDataToDb",
  async ({ uploadBookingData, pricePerNight, catteryId }, thunkAPI) => {
    try {
      const {
        bookingId,
        customerName,
        customerEmail,
        customerId,
        checkInDate,
        checkInSlot,
        checkOutDate,
        checkOutSlot,
        paymentStatus,
        catsInBooking,
      } = uploadBookingData;

      const numberOfCats = catsInBooking.length;
      const lengthOfStay = differenceInDays(checkOutDate, checkInDate);

      const totalCost =
        lengthOfStay === 0 ? 0 : numberOfCats * lengthOfStay * pricePerNight;

      const data = {
        bookingId,
        customerName,
        customerEmail,
        customerId,
        checkInDate,
        checkInSlot,
        checkOutDate,
        checkOutSlot,
        paymentStatus,
        catsInBooking: catsInBooking.join(", "),
        catteryId,
        totalCost,
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

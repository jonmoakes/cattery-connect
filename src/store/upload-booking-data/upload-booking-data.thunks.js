import { createAsyncThunk } from "@reduxjs/toolkit";

import { ID } from "appwrite";
import { bookingsCollectionId, databaseId } from "../../constants/constants";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { differenceInDays } from "date-fns";

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

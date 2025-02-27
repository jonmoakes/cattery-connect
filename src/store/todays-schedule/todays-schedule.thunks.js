import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";

import {
  databaseId,
  bookingsCollectionId,
  catsCollectionId,
} from "../../constants/constants";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";

export const getTodaysBookingsRequiredDataAsync = createAsyncThunk(
  "getTodaysBookingsRequiredData",
  async ({ catteryId }, thunkAPI) => {
    try {
      if (!catteryId) {
        throw new Error("No cattery ID provided");
      }

      const today = format(new Date(), "yyyy-MM-dd");

      const todaysBookingsQuery = [
        Query.equal("catteryId", catteryId),
        Query.lessThanEqual("checkInDate", today),
        Query.greaterThanEqual("checkOutDate", today),
      ];

      const bookingsResponse = await databases.listDocuments(
        databaseId,
        bookingsCollectionId,
        todaysBookingsQuery
      );

      const todayBookings = bookingsResponse.documents;

      if (!todayBookings.length) return [];

      const customerIdsArray = todayBookings.map(
        (booking) => booking.customerId
      );

      const catsResponse = await databases.listDocuments(
        databaseId,
        catsCollectionId,
        [Query.equal("customerId", customerIdsArray)]
      );

      const catsInToday = catsResponse.documents;

      const requiredCatData = catsInToday.map((cat) => ({
        catsName: cat.catsName,
        catsFeedingInfo: cat.catsFeedingInfo,
        catsMedicalInfo: cat.catsMedicalInfo,
      }));

      return requiredCatData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

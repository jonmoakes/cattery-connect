import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";

import {
  databaseId,
  bookingsCollectionId,
  //   customersCollectionId,
  //   standardRateLimit,
} from "../../constants/constants";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";
// import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

export const getTodaysScheduleAsync = createAsyncThunk(
  "getTodaysSchedule",
  async ({ catteryId }, thunkAPI) => {
    try {
      const today = format(new Date(), "yyyy-MM-dd"); // Format today's date

      const queries = [
        Query.equal("catteryId", catteryId),
        Query.lessThanEqual("checkInDate", today),
        Query.greaterThanEqual("checkOutDate", today),
      ];

      const queriesResponse = await databases.listDocuments(
        databaseId,
        bookingsCollectionId,
        queries
      );

      const { documents } = queriesResponse;

      if (!documents.length) return [];

      if (!documents.length) {
        return [];
      }

      const catsAndCustomerIds = documents.map((doc) => ({
        catsInBooking: doc.catsInBooking,
        customerId: doc.customerId,
      }));

      return catsAndCustomerIds;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodaysCatsAsync = createAsyncThunk(
  "schedule/getTodaysCats",
  async ({ todaysScheduleData }, thunkAPI) => {
    try {
      console.log(todaysScheduleData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

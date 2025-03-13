import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  usersCollectionId,
  standardRateLimit,
} from "../../constants/constants";

export const getAllOwnersCustomersAsync = createAsyncThunk(
  "getAllOwnersCustomers",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        usersCollectionId,
        queryIndex,
        queryValue,
        false,
        standardRateLimit
      );

      const { documents } = usersCustomers;

      if (!documents.length) {
        return [];
      }

      const usersWithCustomerRole = documents.filter(
        (user) => user.role === "customer"
      );

      return usersWithCustomerRole;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

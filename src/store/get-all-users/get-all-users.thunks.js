import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  usersCollectionId,
  highRateLimit,
} from "../../constants/constants";

export const fetchAllUsersDocumentsAsync = createAsyncThunk(
  "fetchAllUsersDocuments",
  async (_, thunkAPI) => {
    try {
      const users = await listDocumentsInACollection(
        databaseId,
        usersCollectionId,
        highRateLimit
      );

      const { documents } = users;

      if (!documents.length) {
        return [];
      }

      const usersMinusAdmin = documents.filter((user) => user.role !== "admin");

      return usersMinusAdmin;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCatteryIdsAndOwnerNameArrayAsync = createAsyncThunk(
  "fetchCatteryIdsAndOwnerNameArray",
  async (_, thunkAPI) => {
    try {
      const users = await listDocumentsInACollection(
        databaseId,
        usersCollectionId,
        highRateLimit
      );

      const { documents } = users;

      if (!documents.length) {
        return [];
      }

      const usersMinusAdmin = documents.filter((user) => user.role !== "admin");

      const catterysIdAndOwnerNameArray = usersMinusAdmin.map((user) => ({
        catteryId: user.catteryId,
        name: user.name,
      }));
      return catterysIdAndOwnerNameArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

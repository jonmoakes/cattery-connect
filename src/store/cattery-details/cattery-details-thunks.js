import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";
import {
  catteryInfoCollectionId,
  databaseId,
  smallRateLimit,
} from "../../constants/constants";

export const getCatteryDetailsAsync = createAsyncThunk(
  "getCatteryDetails",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const response = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = response;

      if (!documents.length) {
        throw new Error("couldn't find cattery details.");
      }

      const catteryDetails = documents[0];

      return catteryDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

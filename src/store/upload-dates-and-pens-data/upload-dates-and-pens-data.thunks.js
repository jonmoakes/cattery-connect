import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import {
  catteryOwnersCollectionId,
  databaseId,
} from "../../constants/constants";

export const uploadDatesAndPensAsync = createAsyncThunk(
  "uploadDatesAndPens",
  async ({ datesAndPensInfo, attributeKey, documentId }, thunkAPI) => {
    try {
      const jsonString = JSON.stringify(datesAndPensInfo);

      const dataToUpdate = {
        [attributeKey]: jsonString,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        catteryOwnersCollectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

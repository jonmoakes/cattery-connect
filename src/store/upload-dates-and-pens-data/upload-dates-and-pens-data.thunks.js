import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

const databaseId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_CATTERY_OWNERS_COLLECTION_ID;

export const uploadDatesAndPensAsync = createAsyncThunk(
  " uploadDatesAndPens",
  async ({ datesAndPensInfo, attributeKey, documentId }, thunkAPI) => {
    try {
      const jsonString = JSON.stringify(datesAndPensInfo);

      const dataToUpdate = {
        [attributeKey]: jsonString,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        collectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

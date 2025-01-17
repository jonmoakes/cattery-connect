import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";

export const deleteCustomerFromDbAsync = createAsyncThunk(
  " deleteCustomerFromDb",
  async ({ documentId }, thunkAPI) => {
    try {
      await manageDatabaseDocument(
        "delete",
        databaseId,
        customersCollectionId,
        documentId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

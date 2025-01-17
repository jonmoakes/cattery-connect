import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";
import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";

export const deleteCatFromDbAsync = createAsyncThunk(
  " deleteCatFromDb",
  async ({ updatedCats, customerDocumentId }, thunkAPI) => {
    const lowercasedCats = updatedCats.map((cat) => lowercaseObjectValues(cat));

    const attributeKey = "catDetails";
    const updatedCatDetailsString = JSON.stringify(lowercasedCats);

    const dataToUpdate = {
      [attributeKey]: updatedCatDetailsString,
    };

    try {
      await manageDatabaseDocument(
        "update",
        databaseId,
        customersCollectionId,
        customerDocumentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

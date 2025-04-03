import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  catteryInfoCollectionId,
  databaseId,
} from "../../constants/appwrite-constants";
import { smallRateLimit } from "../../constants/api-request-constants";

export const updatePricePerNightAsync = createAsyncThunk(
  "updatePricePerNight",
  async ({ catteryId, newPrice }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const catteryDetails = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = catteryDetails;

      if (!documents.length) {
        throw new Error("couldn't find your cattery details.");
      }

      const { $id } = documents[0];

      const dataToUpdate = { pricePerNight: Number(newPrice) };

      await manageDatabaseDocument(
        "update",
        databaseId,
        catteryInfoCollectionId,
        $id,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

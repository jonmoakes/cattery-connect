import { createAsyncThunk } from "@reduxjs/toolkit";
import { Query } from "appwrite";
import { format, lastDayOfMonth } from "date-fns";
import {
  availablilityCollectionId,
  databaseId,
} from "../../constants/appwrite-constants";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { smallRateLimit } from "../../constants/api-request-constants";
import { noDateDocumentsFoundString } from "../../constants/error-constants";

export const getDateDocumentsToDeleteAsync = createAsyncThunk(
  "getDateDocumentsToDelete",
  async ({ catteryId, month, year }, thunkAPI) => {
    try {
      const paddedMonth = month.toString().padStart(2, "0");
      const paddedYear = year.toString();

      // Create a JS Date object for the first day of the month
      const startDateObj = new Date(`${paddedYear}-${paddedMonth}-01`);

      // Get the actual last day of that month
      const endDateObj = lastDayOfMonth(startDateObj);

      // Format both dates back to YYYY-MM-DD
      const startDate = format(startDateObj, "yyyy-MM-dd");
      const endDate = format(endDateObj, "yyyy-MM-dd");

      const query = [
        Query.equal("catteryId", catteryId),
        Query.greaterThanEqual("date", startDate),
        Query.lessThanEqual("date", endDate),
      ];

      const dateDocumentsToDelete = await listDocumentsByQueryOrSearch(
        databaseId,
        availablilityCollectionId,
        query,
        null,
        null,
        smallRateLimit
      );

      const { documents } = dateDocumentsToDelete;

      if (!documents.length) {
        throw new Error(noDateDocumentsFoundString);
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDateDocumentsAsync = createAsyncThunk(
  "deleteDateDocuments",
  async ({ dateDocumentsToDelete }, thunkAPI) => {
    try {
      const dateDocumentIds = dateDocumentsToDelete.map((doc) => doc.$id);

      const deletePromises = dateDocumentIds.map((docId) =>
        manageDatabaseDocument(
          "delete",
          databaseId,
          availablilityCollectionId,
          docId
        )
      );

      const results = await Promise.allSettled(deletePromises);

      const failedIds = results
        .map((result, index) => {
          if (result.status === "rejected") {
            // fallback if error.$id wasn't set inside the thrown error
            return dateDocumentIds[index];
          }
          return null;
        })
        .filter(Boolean); // remove nulls

      if (failedIds.length > 0) {
        return thunkAPI.rejectWithValue(failedIds);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

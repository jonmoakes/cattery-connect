import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { Query } from "appwrite";
import { databases } from "../../utils/appwrite/appwrite-config";
import {
  databaseId,
  availablilityCollectionId,
} from "../../constants/appwrite-constants";

export const fetchChosenDaysPenDataAsync = createAsyncThunk(
  "fetchChosenDaysPenData",
  async ({ catteryId, chosenDate }, thunkAPI) => {
    try {
      if (!catteryId) {
        throw new Error("No cattery ID provided");
      }

      const today = new Date();

      const date = chosenDate
        ? format(chosenDate, "yyyy-MM-dd")
        : format(today, "yyyy-MM-dd");

      const availabilityQuery = [
        Query.equal("catteryId", catteryId),
        Query.equal("date", date),
      ];

      const availabilityResponse = await databases.listDocuments(
        databaseId,
        availablilityCollectionId,
        availabilityQuery
      );

      const penData = availabilityResponse.documents;

      if (!penData.length) {
        return [];
      }

      const { morningPensData, afternoonPensData } = penData[0];

      const parsedMorningPens = JSON.parse(morningPensData);
      const parsedAfternoonPens = JSON.parse(afternoonPensData);

      return {
        returnedChosenDate: date,
        parsedMorningPens,
        parsedAfternoonPens,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

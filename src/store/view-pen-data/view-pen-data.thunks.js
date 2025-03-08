import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  availablilityCollectionId,
  smallRateLimit,
} from "../../constants/constants";
import { format } from "date-fns";

export const fetchChosenDaysPenDataAsync = createAsyncThunk(
  "fetchChosenDaysPenData",
  async ({ chosenDate }, thunkAPI) => {
    try {
      console.log("j o ", chosenDate);
      const formattedChosenDate = format(chosenDate, "yyyy-MM-dd");

      const queryIndex = "date";
      const queryValue = formattedChosenDate;

      const penData = await listDocumentsByQueryOrSearch(
        databaseId,
        availablilityCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = penData;

      if (!documents.length) {
        return [];
      }

      const { morningPensData, afternoonPensData } = documents[0];

      const parsedMorningPens = JSON.parse(morningPensData);
      const parsedAfternoonPens = JSON.parse(afternoonPensData);

      return {
        returnedChosenDate: formattedChosenDate,
        parsedMorningPens,
        parsedAfternoonPens,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ID } from "appwrite";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  availablilityCollectionId,
  catteryInfoCollectionId,
  databaseId,
} from "../../constants/constants";

import { generateCatteryAvailabilityForDate } from "./upload-dates-and-epens-functions/upload-dates-and-pens-functions";

export const uploadDatesAndPensAvailabilityDocumentAsync = createAsyncThunk(
  "uploadDatesAndPensAvailabilityDocument",
  async ({ datesAndPensData, datesClosedArray }, thunkAPI) => {
    try {
      const {
        catteryId,
        penSpacesForOneOrTwoCats,
        penSpacesForThreeCats,
        penSpacesForFourCats,
        penSpacesForFiveCats,
        startDate,
        endDate,
      } = datesAndPensData;

      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const getCatteryInfo = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents } = getCatteryInfo;

      if (!documents.length) {
        throw new Error("No cattery info found");
      }

      const { numberOfPensInCattery } = documents[0];

      const values = [
        penSpacesForOneOrTwoCats,
        penSpacesForThreeCats ? penSpacesForThreeCats : 0,
        penSpacesForFourCats ? penSpacesForFourCats : 0,
        penSpacesForFiveCats ? penSpacesForFiveCats : 0,
      ];

      const totalNumberOfPens = values.reduce(
        (acc, val) => acc + Number(val),
        0
      );

      if (totalNumberOfPens !== numberOfPensInCattery) {
        throw new Error(
          `The total provided ( ${totalNumberOfPens} ) does not equal the total number of pens in this cattery ( ${numberOfPensInCattery} ).`
        );
      }

      // Generate all dates for the given range (startDate to endDate), excluding the days off
      const dates = [];
      const start = new Date(startDate); // No need to format startDate as it's already in correct format
      const end = new Date(endDate); // No need to format endDate

      for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`; // Manually format the date
        if (!datesClosedArray.includes(dateString)) {
          dates.push(dateString);
        }
      }

      // Loop through the valid dates and upload availability
      for (const date of dates) {
        const availability = generateCatteryAvailabilityForDate(
          catteryId,
          penSpacesForOneOrTwoCats,
          penSpacesForThreeCats,
          penSpacesForFourCats,
          penSpacesForFiveCats
        );

        // Adjust the date for the specific day in the loop and add the catteryId
        availability.catteryId = catteryId;
        availability.date = date;

        await manageDatabaseDocument(
          "create",
          databaseId,
          availablilityCollectionId,
          ID.unique(),
          availability
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

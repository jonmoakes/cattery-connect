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

import { generateCatteryAvailabilityForDate } from "../../functions/generate-dates-and-pens-info";

export const uploadDatesAndPensAvailabilityDocumentAsync = createAsyncThunk(
  "uploadDatesAndPensAvailabilityDocument",
  async ({ datesAndPensData, datesClosedArray }, thunkAPI) => {
    try {
      const {
        catteryId,
        penSpacesForMaxTwoCats,
        penSpacesForMaxThreeCats,
        penSpacesForMaxFourCats,
        penSpacesForMaxFiveCats,
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

      const { maxNumberOfPens } = documents[0];

      const values = [
        penSpacesForMaxTwoCats,
        penSpacesForMaxThreeCats,
        penSpacesForMaxFourCats,
        penSpacesForMaxFiveCats,
      ];

      const totalNumberOfPens = values.reduce(
        (acc, val) => acc + Number(val),
        0
      );

      if (totalNumberOfPens !== maxNumberOfPens) {
        throw new Error(
          "The total provided does not equal the total number of pens available in the cattery."
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
          penSpacesForMaxTwoCats,
          penSpacesForMaxThreeCats,
          penSpacesForMaxFourCats,
          penSpacesForMaxFiveCats
        );

        // Adjust the date for the specific day in the loop
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

import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";
import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateShortId } from "../../functions/generate-short-id";

export const uploadCatToDbAsync = createAsyncThunk(
  "uploadCatToDb",
  async ({ catObject, customerDocumentId }, thunkAPI) => {
    try {
      const lowercasedCat = lowercaseObjectValues(catObject);
      const { catsId } = lowercasedCat;

      const customerDoc = await manageDatabaseDocument(
        "get",
        databaseId,
        customersCollectionId,
        customerDocumentId
      );

      const { catDetails } = customerDoc;

      let existingCatDetails = [];

      if (catDetails) {
        try {
          const parsedCatDetails = JSON.parse(catDetails);

          if (Array.isArray(parsedCatDetails)) {
            existingCatDetails = parsedCatDetails;
          }
        } catch (error) {
          return thunkAPI.rejectWithValue(
            `Failed to parse existing cat details. ${error}`
          );
        }
      }

      // Check if the cat already exists and update it
      const catIndex = existingCatDetails.findIndex(
        (cat) => cat.catsId === catsId
      );

      if (catIndex !== -1) {
        // Update the existing cat's details
        existingCatDetails[catIndex] = {
          ...existingCatDetails[catIndex],
          ...lowercasedCat,
        };
      } else {
        // If the cat doesn't exist, add it as a new entry
        existingCatDetails.push({
          catsId: catsId || generateShortId(lowercasedCat.catsName),
          ...lowercasedCat,
        });
      }

      const updatedCatDetailsString = JSON.stringify(existingCatDetails);

      const dataToUpdate = {
        catDetails: updatedCatDetailsString,
      };

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

export const deleteCatFromDbAsync = createAsyncThunk(
  " deleteCatFromDb",
  async ({ updatedCats, customerDocumentId }, thunkAPI) => {
    try {
      const lowercasedCats = updatedCats.map((cat) =>
        lowercaseObjectValues(cat)
      );

      const attributeKey = "catDetails";
      const updatedCatDetailsString = JSON.stringify(lowercasedCats);

      const dataToUpdate = {
        [attributeKey]: updatedCatDetailsString,
      };
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

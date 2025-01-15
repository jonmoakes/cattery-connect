import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";
import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";

export const addCatToDbAsync = createAsyncThunk(
  "addCatToDb",
  async ({ addCatDetails, customerDocumentId }, thunkAPI) => {
    try {
      const lowercasedObject = lowercaseObjectValues(addCatDetails);
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
          // Attempt to parse the existing catDetails string into an array of objects
          const parsedCatDetails = JSON.parse(catDetails);

          // If the parsed value is an array, use it as existing cat details
          if (Array.isArray(parsedCatDetails)) {
            existingCatDetails = parsedCatDetails;
          }
        } catch (error) {
          //  parsing fails
          return thunkAPI.rejectWithValue(
            `Failed to parse existing cat details. ${error}`
          );
        }
      }

      existingCatDetails.push(lowercasedObject);

      // Convert the updated cat details array back into a string for storage
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
      // If any error occurs in the try block, reject with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

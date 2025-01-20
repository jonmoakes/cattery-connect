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
          // Attempt to parse the existing catDetails string into an array of objects
          const parsedCatDetails = JSON.parse(catDetails);

          // If the parsed value is an array, use it as existing cat details
          if (Array.isArray(parsedCatDetails)) {
            existingCatDetails = parsedCatDetails;
          }
        } catch (error) {
          // Handle parsing errors
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

      // Convert the updated cat details array back into a string for storage
      const updatedCatDetailsString = JSON.stringify(existingCatDetails);

      const dataToUpdate = {
        catDetails: updatedCatDetailsString,
      };

      // Update the customer document in the database
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

// export const uploadCatToDbAsync = createAsyncThunk(
//   "uploadCatToDb",
//   async ({ catObject, docId }, thunkAPI) => {
//     try {
//       const lowercasedCat = lowercaseObjectValues(catObject);
//       const { catsId } = lowercasedCat; // Assuming `catsId` is already part of `catObject`

//       const customerDoc = await manageDatabaseDocument(
//         "get",
//         databaseId,
//         customersCollectionId,
//         docId
//       );

//       const { catDetails } = customerDoc;

//       let existingCatDetails = [];

//       if (catDetails) {
//         try {
//           // Attempt to parse the existing catDetails string into an array of objects
//           const parsedCatDetails = JSON.parse(catDetails);

//           // If the parsed value is an array, use it as existing cat details
//           if (Array.isArray(parsedCatDetails)) {
//             existingCatDetails = parsedCatDetails;
//           }
//         } catch (error) {
//           // Handle parsing errors
//           return thunkAPI.rejectWithValue(
//             `Failed to parse existing cat details. ${error}`
//           );
//         }
//       }

//       // Check if the cat already exists and update it
//       const catIndex = existingCatDetails.findIndex(
//         (cat) => cat.catsId === catsId
//       );

//       if (catIndex !== -1) {
//         // Update the existing cat's details
//         existingCatDetails[catIndex] = {
//           ...existingCatDetails[catIndex],
//           ...lowercasedCat,
//         };
//       } else {
//         // If the cat doesn't exist, add it as a new entry
//         existingCatDetails.push({
//           catsId: catsId || generateShortId(lowercasedCat.catsName),
//           ...lowercasedCat,
//         });
//       }

//       // Convert the updated cat details array back into a string for storage
//       const updatedCatDetailsString = JSON.stringify(existingCatDetails);

//       const dataToUpdate = {
//         catDetails: updatedCatDetailsString,
//       };

//       // Update the customer document in the database
//       await manageDatabaseDocument(
//         "update",
//         databaseId,
//         customersCollectionId,
//         docId,
//         dataToUpdate
//       );
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  customersCollectionId,
  standardRateLimit,
} from "../../constants/constants";

export const fetchAllCatsAsync = createAsyncThunk(
  "fetchAllCats",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        customersCollectionId,
        queryIndex,
        queryValue,
        false,
        standardRateLimit
      );

      const { documents } = usersCustomers;

      if (!documents.length) {
        return [];
      }

      const allCatsDetails = documents
        .filter((doc) => doc.catDetails) // Exclude documents where customer has no cats
        .flatMap((doc) => {
          try {
            const parsedDetails = JSON.parse(doc.catDetails);

            // Ensure parsedDetails is an array, then add customerId and name to each object
            const catWithAddedDetails = Array.isArray(parsedDetails)
              ? parsedDetails.map((cat) => ({
                  ...cat,
                  customerId: doc.customerId,
                  customerName: doc.name,
                  customerDocumentId: doc.$id,
                }))
              : [
                  {
                    ...parsedDetails,
                    customerId: doc.customerId,
                    customerName: doc.name,
                  },
                ];

            return catWithAddedDetails;
          } catch (error) {
            console.error(
              `Failed to parse catDetails for document ID ${doc.$id}`,
              error
            );
            return []; // Return an empty array for failed parses
          }
        });

      return allCatsDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCatsOwnerDetailsAsync = createAsyncThunk(
  "fetchCatsOwnerDetails",
  async ({ selectedCatsOwnerCustomerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = selectedCatsOwnerCustomerId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        customersCollectionId,
        queryIndex,
        queryValue,
        false,
        standardRateLimit
      );

      const { documents } = usersCustomers;

      if (!documents.length) {
        return {};
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

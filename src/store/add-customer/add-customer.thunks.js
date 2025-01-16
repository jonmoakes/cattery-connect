import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";
import { ID } from "appwrite";

import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateShortId } from "../../functions/generate-short-id";

export const addCustomerToDbAsync = createAsyncThunk(
  "addCustomerToDb",
  async ({ addCustomerDetails, catteryId }, thunkAPI) => {
    try {
      const lowercasedCustomer = lowercaseObjectValues(addCustomerDetails);
      const customerId = generateShortId(lowercasedCustomer.name);

      const data = {
        customerId,
        catteryId,
        ...lowercasedCustomer,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        customersCollectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

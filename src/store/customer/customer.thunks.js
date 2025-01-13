import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customerCollectionId, databaseId } from "../../constants/constants";
import { ID } from "appwrite";

import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateCustomerId } from "../../functions/generate-customer-id";

export const addCustomerAsync = createAsyncThunk(
  "addCustomer",
  async ({ customerDetails }, thunkAPI) => {
    try {
      const lowercasedCustomer = lowercaseObjectValues(customerDetails);
      const customerId = generateCustomerId(lowercasedCustomer.name);

      const data = {
        customerId,
        ...lowercasedCustomer,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        customerCollectionId,
        ID.unique(),
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { customersCollectionId, databaseId } from "../../constants/constants";
import { ID } from "appwrite";

import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateShortId } from "../../functions/generate-short-id";

export const addCustomerAsync = createAsyncThunk(
  "addCustomer",
  async ({ customerDetails, catteryId }, thunkAPI) => {
    try {
      const lowercasedCustomer = lowercaseObjectValues(customerDetails);

      const data = {
        customerId: generateShortId(lowercasedCustomer.name),
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

export const editCustomerAsync = createAsyncThunk(
  "editCustomer",
  async ({ customerDetails }, thunkAPI) => {
    try {
      // Destructure $id and the rest of the required properties
      const { $id, ...rest } = customerDetails;

      const {
        address,
        catDetails,
        catteryId,
        customerId,
        email,
        emergencyContactDetails,
        name,
        phoneNumber,
      } = rest;

      const data = lowercaseObjectValues({
        address,
        catDetails,
        catteryId,
        customerId,
        email,
        emergencyContactDetails,
        name,
        phoneNumber,
      });

      await manageDatabaseDocument(
        "update",
        databaseId,
        customersCollectionId,
        $id,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCustomerAsync = createAsyncThunk(
  " deleteCustomer",
  async ({ $id }, thunkAPI) => {
    try {
      await manageDatabaseDocument(
        "delete",
        databaseId,
        customersCollectionId,
        $id
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

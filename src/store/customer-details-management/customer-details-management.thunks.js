import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import {
  catsCollectionId,
  usersCollectionId,
  databaseId,
  smallRateLimit,
} from "../../constants/constants";
import { ID } from "appwrite";

import { lowercaseObjectValues } from "../../functions/lowercase-object-vaules";
import { generateShortId } from "../../functions/generate-short-id";

export const addCustomerAsync = createAsyncThunk(
  "addCustomer",
  async ({ customerObject, catteryId }, thunkAPI) => {
    try {
      const lowercasedCustomer = lowercaseObjectValues(customerObject);

      const data = {
        customerId: generateShortId(lowercasedCustomer.name),
        role: "customer",
        catteryId,
        ...lowercasedCustomer,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        usersCollectionId,
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
  async ({ customerObject }, thunkAPI) => {
    try {
      const { $id, ...rest } = customerObject;

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
        usersCollectionId,
        $id,
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCustomersCatsAsync = createAsyncThunk(
  "deleteCustomersCats",
  async ({ customerId }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const customersCats = await listDocumentsByQueryOrSearch(
        databaseId,
        catsCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = customersCats;

      if (!documents.length) {
        return;
      }

      const catDocumentIds = documents.map((cat) => cat.$id);

      for (const catId of catDocumentIds) {
        await manageDatabaseDocument(
          "delete",
          databaseId,
          catsCollectionId,
          catId
        );
      }
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
        usersCollectionId,
        $id
      );
    } catch (error) {
      return thunkAPI.rejectWithValue({
        customerDocumentId: $id,
        message: error.message,
      });
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import {
  usersCollectionId,
  databaseId,
} from "../../constants/appwrite-constants";
import { smallRateLimit } from "../../constants/api-request-constants";
import { getRetrievedUserFromDocument } from "./functions";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const user = await account.get();
      const session = await account.getSession("current");

      if (!user || !session) return;

      const retrievedUser = await getRetrievedUserFromDocument();

      if (retrievedUser) {
        return retrievedUser;
      } else {
        return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      email = email.toLowerCase();
      await account.createEmailPasswordSession(email, password);
      return await getRetrievedUserFromDocument();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ customerId, password }, thunkAPI) => {
    try {
      const queryIndex = "customerId";
      const queryValue = customerId;

      const matchedCustomer = await listDocumentsByQueryOrSearch(
        databaseId,
        usersCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = matchedCustomer;

      if (!documents.length) {
        throw new Error("couldn't find customer");
      }

      const customer = documents[0];

      const { $id, email, name } = customer;

      if (!email) {
        throw new Error(
          "no email address found. please contact your cattery and provide them an email address and then try again."
        );
      }

      await account.create($id, email, password, name);
      await account.createEmailPasswordSession(email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

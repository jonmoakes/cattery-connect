import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import {
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
} from "./functions";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const user = await account.get();
      const session = await account.getSession("current");

      if (!user || !session) return;

      const retrievedUser = await getRetrievedUserFromDocument();

      const createdUser = await createDocumentAndSetUser();

      if (retrievedUser) {
        return retrievedUser;
      } else if (createdUser) {
        return createdUser;
      } else if (!retrievedUser && !createdUser) {
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
  async ({ email, name, password, phoneNumber }, thunkAPI) => {
    try {
      email = email.toLowerCase();
      name = name.toLowerCase();
      await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);
      return await createDocumentAndSetUser(phoneNumber);
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

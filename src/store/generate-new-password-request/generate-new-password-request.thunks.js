import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import { chooseNewPasswordRoute } from "../../strings/routes";

export const generateNewPasswordRequestAsync = createAsyncThunk(
  "generateNewPasswordRequest",
  async ({ generateNewPasswordRequestEmail }, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        await account.createRecovery(
          generateNewPasswordRequestEmail,
          `http://localhost:8888${chooseNewPasswordRoute}`
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createRecovery(
          generateNewPasswordRequestEmail,
          `https://fishnfry-hub.netlify.app${chooseNewPasswordRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

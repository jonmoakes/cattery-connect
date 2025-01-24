import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

export const getChooseNewPasswordResultAsync = createAsyncThunk(
  "getChooseNewPasswordResult",
  async ({ newPassword, confirmNewPassword }, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateRecovery(
        userId,
        secret,
        newPassword,
        confirmNewPassword
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

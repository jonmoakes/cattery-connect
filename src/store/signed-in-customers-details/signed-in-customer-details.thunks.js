import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { databaseId, usersCollectionId } from "../../constants/constants";

export const getSignedInCustomersDetailsAsync = createAsyncThunk(
  "getSignedInCustomersDetails",
  async ({ id }, thunkAPI) => {
    try {
      const response = await manageDatabaseDocument(
        "get",
        databaseId,
        usersCollectionId,
        id
      );

      const {
        $id,
        name,
        email,
        address,
        phoneNumber,
        emergencyContactDetails,
        customerId,
        catteryId,
      } = response;

      const signedInCustomersDetails = {
        $id,
        name,
        email,
        address,
        phoneNumber,
        emergencyContactDetails,
        customerId,
        catteryId,
      };

      return signedInCustomersDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

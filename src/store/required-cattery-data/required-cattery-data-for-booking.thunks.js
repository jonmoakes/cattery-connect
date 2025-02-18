import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";
import { catteryInfoCollectionId, databaseId } from "../../constants/constants";

export const getRequiredCatteryDataForBookingAsync = createAsyncThunk(
  "getRequiredCatteryDataForBooking",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const usersCustomers = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents } = usersCustomers;

      const catteryDoc = documents[0];

      if (catteryDoc.length) {
        throw new Error("Couldn't Find Cattery Document");
      }

      const { maximumCatsInSinglePen, pricePerNight, name, phone, email } =
        catteryDoc;

      return {
        maximumCatsInSinglePen,
        pricePerNight,
        name,
        phone,
        email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_RECEIVED_PAYMENTS_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const requestIncomeDataAsync = createAsyncThunk(
  "requestIncomeData",
  async ({ catteryId, monthOffset }, thunkAPI) => {
    try {
      const response = await axios.post(GET_RECEIVED_PAYMENTS_ENDPOINT, {
        catteryId,
        limit: 100,
        monthOffset,
      });

      const incomeData = response.data;

      const filteredIncomeData = incomeData
        .filter((item) => item.status === "succeeded")
        .map((item) => {
          const {
            payment_intent,
            amount,
            currency,
            created,
            receipt_url,
            billing_details,
          } = item;
          const { email, name } = billing_details;

          return {
            payment_intent,
            amount,
            currency,
            created,
            receipt_url,
            email,
            name,
          };
        });

      return { monthOffset, filteredIncomeData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

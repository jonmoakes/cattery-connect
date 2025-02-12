import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { SEND_EMAIL_CATTERY_CONNECT_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailCatteryConnectUpdatePensRollbackErrorAsync =
  createAsyncThunk(
    "sendEmailCatteryConnectUpdatePensRollbackError",
    async (
      {
        catteryId,
        operation,
        addBookingData,
        rollbackFailures,
        originalAvailabilityData,
      },
      thunkAPI
    ) => {
      try {
        console.log(
          catteryId,
          operation,
          addBookingData,
          rollbackFailures,
          originalAvailabilityData
        );
        const response = await axios.post(
          SEND_EMAIL_CATTERY_CONNECT_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT,
          {
            catteryId,
            operation,
            addBookingData,
            rollbackFailures,
            originalAvailabilityData,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

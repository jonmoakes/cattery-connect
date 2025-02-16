import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { differenceInDays } from "date-fns";

import { formatBookingDetailsForUpdatePenDataError } from "./functions/format-booking-details-for-update-pen-data-error";
import { formatOriginalAvailabilityData } from "./functions/format-original-availability-data";
import { formatFullBookingDetails } from "./functions/format-full-booking-details";

import { formatReceiptBookingDetails } from "./functions/format-receipt-booking-details";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

import {
  SEND_EMAIL_CATTERY_CONNECT_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT,
  SEND_EMAIL_CATTERY_CONNECT_PENS_UPDATED_BOOKING_DATA_FAILED_ENDPOINT,
  SEND_EMAIL_CATTERY_CONNECT_SEND_CUSTOMER_EMAIL_RECEIPT_ENDPOINT,
} from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailCatteryConnectUpdatePensRollbackErrorAsync =
  createAsyncThunk(
    "sendEmailCatteryConnectUpdatePensRollbackError",
    async (
      {
        uploadBookingData,
        rollbackFailures,
        originalAvailabilityData,
        catteryId,
        operation,
      },
      thunkAPI
    ) => {
      try {
        const formattedBookingDetails =
          formatBookingDetailsForUpdatePenDataError(uploadBookingData);

        const formattedRollbackFailures =
          rollbackFailures && rollbackFailures.length > 0
            ? rollbackFailures.join("\n\n")
            : "No Doc IDs Found";

        const filteredAvailabilityData = originalAvailabilityData.filter(
          (day) => rollbackFailures.includes(day.documentId)
        );
        const formattedOriginalAvailabilityData =
          formatOriginalAvailabilityData(filteredAvailabilityData);

        const response = await axios.post(
          SEND_EMAIL_CATTERY_CONNECT_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT,
          {
            catteryId,
            operation,
            formattedBookingDetails,
            formattedRollbackFailures,
            formattedOriginalAvailabilityData,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync =
  createAsyncThunk(
    "sendEmailPensUpdatedUploadBookingDataFailed",
    async ({ uploadBookingData, catteryId, addBookingDataError }, thunkAPI) => {
      try {
        const formattedFullBookingDetails =
          formatFullBookingDetails(uploadBookingData);

        const response = await axios.post(
          SEND_EMAIL_CATTERY_CONNECT_PENS_UPDATED_BOOKING_DATA_FAILED_ENDPOINT,
          {
            catteryId,
            addBookingDataError,
            formattedFullBookingDetails,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const sendEmailCatteryConnectSendCustomerEmailReceiptAsync =
  createAsyncThunk(
    "sendEmailCatteryConnectSendCustomerEmailReceipt",
    async (
      { uploadBookingData, pricePerNight, name, phone, catteryEmail },
      thunkAPI
    ) => {
      try {
        const formattedFullBookingDetails =
          formatReceiptBookingDetails(uploadBookingData);
        const {
          catsInBooking,
          checkOutDate,
          checkInDate,
          customerEmail,
          customerName,
        } = uploadBookingData;

        const numberOfCats = catsInBooking.length;
        const lengthOfStay = differenceInDays(checkOutDate, checkInDate);

        const costOfStayPounds = (
          (numberOfCats * lengthOfStay * pricePerNight) /
          100
        ).toFixed(2);

        const response = await axios.post(
          SEND_EMAIL_CATTERY_CONNECT_SEND_CUSTOMER_EMAIL_RECEIPT_ENDPOINT,
          {
            customerEmail,
            customerName: getFirstNameFromString(customerName),
            name,
            formattedFullBookingDetails,
            costOfStayPounds,
            phone,
            catteryEmail,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

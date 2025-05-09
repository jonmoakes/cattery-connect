import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { differenceInDays } from "date-fns";

import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";

import { formatBookingDetailsForUpdatePenDataError } from "./functions/format-booking-details-for-update-pen-data-error";
import { formatOriginalAvailabilityData } from "./functions/format-original-availability-data";
import { formatFullBookingDetails } from "./functions/format-full-booking-details";
import { formatReceiptBookingDetails } from "./functions/format-receipt-booking-details";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";
import { formatCancelBookingReceipt } from "./functions/format-cancel-booking-receipt";

import {
  catteryInfoCollectionId,
  databaseId,
  adminEmail,
} from "../../constants/appwrite-constants";
import { smallRateLimit } from "../../constants/api-request-constants";

import {
  SEND_EMAIL_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT,
  SEND_EMAIL_PENS_UPDATED_BOOKING_DATA_FAILED_ENDPOINT,
  SEND_EMAIL_SEND_CUSTOMER_EMAIL_RECEIPT_ENDPOINT,
  SEND_EMAIL_DELETE_BOOKING_DATA_FAILED_ENDPOINT,
  SEND_EMAIL_CANCEL_BOOKING_RECEIPT_ENDPOINT,
  SEND_EMAIL_CONTACT_FORM_MESSAGE_ENDPOINT,
  SEND_EMAIL_FAILED_STATUS_UPDATE_AFTER_SUCCESSFUL_PAYMENT_ENDPOINT,
} from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailUpdatePensRollbackErrorAsync = createAsyncThunk(
  "sendEmailUpdatePensRollbackError",
  async (
    {
      dataForEmail,
      rollbackFailures,
      originalAvailabilityData,
      catteryId,
      operation,
    },
    thunkAPI
  ) => {
    try {
      const formattedBookingDetails =
        formatBookingDetailsForUpdatePenDataError(dataForEmail);

      const formattedRollbackFailures =
        rollbackFailures && rollbackFailures.length > 0
          ? rollbackFailures.join("\n\n")
          : "No Doc IDs Found";

      const filteredAvailabilityData = originalAvailabilityData.filter((day) =>
        rollbackFailures.includes(day.documentId)
      );
      const formattedOriginalAvailabilityData = formatOriginalAvailabilityData(
        filteredAvailabilityData
      );

      const response = await axios.post(
        SEND_EMAIL_UPDATE_PENS_ROLLBACK_ERROR_ENDPOINT,
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
      // Check if the error has a response and contains data.message
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const sendEmailPensUpdatedBookingDataFailedAsync = createAsyncThunk(
  "sendEmailPensUpdatedUploadBookingDataFailed",
  async (
    { uploadBookingData, catteryId, uploadBookingDataError },
    thunkAPI
  ) => {
    try {
      const formattedFullBookingDetails =
        formatFullBookingDetails(uploadBookingData);

      const response = await axios.post(
        SEND_EMAIL_PENS_UPDATED_BOOKING_DATA_FAILED_ENDPOINT,
        {
          catteryId,
          uploadBookingDataError,
          formattedFullBookingDetails,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const sendEmailSendCustomerEmailReceiptAsync = createAsyncThunk(
  "sendEmailSendCustomerEmailReceipt",
  async (
    { uploadBookingData, totalCost, name, phone, catteryEmail },
    thunkAPI
  ) => {
    try {
      const formattedFullBookingDetails =
        formatReceiptBookingDetails(uploadBookingData);

      const { checkOutDate, checkInDate, customerEmail, customerName } =
        uploadBookingData;

      const lengthOfStay = differenceInDays(checkOutDate, checkInDate);

      const costOfStayPounds =
        lengthOfStay === 0 ? "0.00" : (totalCost / 100).toFixed(2);

      const response = await axios.post(
        SEND_EMAIL_SEND_CUSTOMER_EMAIL_RECEIPT_ENDPOINT,
        {
          name,
          customerEmail,
          customerName: getFirstNameFromString(customerName),
          formattedFullBookingDetails,
          costOfStayPounds,
          phone,
          catteryEmail,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const sendEmailDeleteBookingDataFailedAsync = createAsyncThunk(
  "sendEmailDeleteBookingDataFailed",
  async ({ catteryId, $id, deleteBookingDataError }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_DELETE_BOOKING_DATA_FAILED_ENDPOINT,
        {
          catteryId,
          documentId: $id,
          deleteBookingDataError,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const sendCustomerCancellationEmailAsync = createAsyncThunk(
  "sendCustomerCancellationEmail",
  async ({ dataFromBooking, catteryName, phone, catteryEmail }, thunkAPI) => {
    try {
      const { customerEmail, customerName, bookingId } = dataFromBooking;

      const formattedCancelledBookingDetails =
        formatCancelBookingReceipt(dataFromBooking);

      const response = await axios.post(
        SEND_EMAIL_CANCEL_BOOKING_RECEIPT_ENDPOINT,
        {
          catteryName,
          customerEmail,
          customerName: getFirstNameFromString(customerName),
          bookingId,
          formattedCancelledBookingDetails,
          phone,
          catteryEmail,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const sendEmailContactFormMessageAsync = createAsyncThunk(
  "sendEmailContactFormMessage",
  async (
    { catteryEmail, senderName, senderEmail, senderMessage },
    thunkAPI
  ) => {
    try {
      const sendTo = catteryEmail ? catteryEmail : adminEmail;
      const response = await axios.post(
        SEND_EMAIL_CONTACT_FORM_MESSAGE_ENDPOINT,
        {
          sendTo,
          senderName,
          senderEmail: senderEmail.toLowerCase(),
          senderMessage,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error sending email:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getCatteryEmailAsync = createAsyncThunk(
  "getCatteryEmail",
  async ({ catteryId }, thunkAPI) => {
    try {
      const queryIndex = "catteryId";
      const queryValue = catteryId;

      const catteryCats = await listDocumentsByQueryOrSearch(
        databaseId,
        catteryInfoCollectionId,
        queryIndex,
        queryValue,
        false,
        smallRateLimit
      );

      const { documents } = catteryCats;

      if (!documents.length) {
        throw new Error("couldn't get cattery data");
      }

      const catteryData = documents[0];

      const { email } = catteryData;
      return email;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailFailedStatusUpdateAfterSuccessfulPaymentAsync =
  createAsyncThunk(
    "sendEmailFailedStatusUpdateAfterSuccessfulPayment",
    async ({ documentIdOfBooking }, thunkAPI) => {
      try {
        const response = await axios.post(
          SEND_EMAIL_FAILED_STATUS_UPDATE_AFTER_SUCCESSFUL_PAYMENT_ENDPOINT,
          {
            documentIdOfBooking,
          }
        );

        const statusCode = response.status;
        return statusCode;
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        console.error("Error sending email:", errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );

import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  sendEmailCatteryConnectUpdatePensRollbackErrorAsync,
  sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync,
  sendEmailCatteryConnectSendCustomerEmailReceiptAsync,
  sendEmailCatteryConnectDeleteBookingDataFailedAsync,
  sendCustomerCancellationEmailAsync,
  sendEmailContactFormMessageAsync,
} from "./send-email.thunks";

const defaultContactFormDetails = {
  senderName: "",
  senderEmail: "",
  senderMessage: "",
};

const INITIAL_STATE = {
  contactFormDetails: defaultContactFormDetails,
  sendEmailIsLoading: false,
  sendEmailStatusCode: "",
  sendEmailError: null,
};

const handleAsyncAction = (builder, asyncAction) => {
  builder
    .addCase(asyncAction.pending, (state) => {
      state.sendEmailIsLoading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = action.payload;
      state.sendEmailError = null;
    })
    .addCase(asyncAction.rejected, (state, action) => {
      state.sendEmailIsLoading = false;
      state.sendEmailStatusCode = "";
      state.sendEmailError = action.payload;
    });
};

export const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setContactFormDetails(state, action) {
      state.contactFormDetails = action.payload;
    },
    resetContactFormDetails(state) {
      state.contactFormDetails = defaultContactFormDetails;
    },
    resetSendEmailState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectSendEmailSelectors: createSelector(
      (state) => state.sendEmailIsLoading,
      (state) => state.sendEmailStatusCode,
      (state) => state.sendEmailError,
      (state) => state.contactFormDetails,
      (
        sendEmailIsLoading,
        sendEmailStatusCode,
        sendEmailError,
        contactFormDetails
      ) => {
        return {
          sendEmailIsLoading,
          sendEmailStatusCode,
          sendEmailError,
          contactFormDetails,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    handleAsyncAction(
      builder,
      sendEmailCatteryConnectUpdatePensRollbackErrorAsync
    );
    handleAsyncAction(
      builder,
      sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync
    );
    handleAsyncAction(
      builder,
      sendEmailCatteryConnectSendCustomerEmailReceiptAsync
    );
    handleAsyncAction(
      builder,
      sendEmailCatteryConnectDeleteBookingDataFailedAsync
    );
    handleAsyncAction(builder, sendCustomerCancellationEmailAsync);
    handleAsyncAction(builder, sendEmailContactFormMessageAsync);
  },
});

export const {
  setContactFormDetails,
  resetContactFormDetails,
  resetSendEmailState,
} = sendEmailSlice.actions;
export const { selectSendEmailSelectors } = sendEmailSlice.selectors;

export const sendEmailReducer = sendEmailSlice.reducer;

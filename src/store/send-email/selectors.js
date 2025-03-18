import { createSelector } from "@reduxjs/toolkit";

export const selectSendEmailSelectors = createSelector(
  (state) => state.sendEmail,
  (sendEmail) => ({
    sendEmailIsLoading: sendEmail.sendEmailIsLoading,
    sendEmailStatusCode: sendEmail.sendEmailStatusCode,
    sendEmailError: sendEmail.sendEmailError,
    contactFormDetails: sendEmail.contactFormDetails,
    getCatteryEmailIsLoading: sendEmail.getCatteryEmailIsLoading,
    catteryEmail: sendEmail.catteryEmail,
    getCatteryEmailResult: sendEmail.getCatteryEmailResult,
    getCatteryEmailError: sendEmail.getCatteryEmailError,
  })
);

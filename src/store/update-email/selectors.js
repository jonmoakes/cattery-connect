import { createSelector } from "@reduxjs/toolkit";

export const selectUpdateEmailSelectors = createSelector(
  (state) => state.updateEmail,
  (updateEmail) => ({
    updateEmailIsLoading: updateEmail.updateEmailIsLoading,
    updateEmailDetails: updateEmail.updateEmailDetails,
    updateEmailResult: updateEmail.updateEmailResult,
    updateEmailError: updateEmail.updateEmailError,
  })
);

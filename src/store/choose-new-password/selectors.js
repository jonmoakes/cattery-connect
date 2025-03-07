import { createSelector } from "@reduxjs/toolkit";

export const selectChooseNewPasswordSelectors = createSelector(
  (state) => state.chooseNewPassword,
  (chooseNewPassword) => ({
    newPasswordDetails: chooseNewPassword.newPasswordDetails,
    newPasswordResultIsLoading: chooseNewPassword.newPasswordResultIsLoading,
    newPasswordResult: chooseNewPassword.newPasswordResult,
    newPasswordError: chooseNewPassword.newPasswordError,
  })
);

import { createSelector } from "@reduxjs/toolkit";

export const selectSignUpFormSelectors = createSelector(
  (state) => state.signUpForm,
  (signUpForm) => ({
    signUpFormDetails: signUpForm.signUpFormDetails,
  })
);

import { createSelector } from "@reduxjs/toolkit";

export const selectSignInFormSelectors = createSelector(
  (state) => state.signInForm,
  (signInForm) => ({
    signInFormDetails: signInForm.signInFormDetails,
  })
);

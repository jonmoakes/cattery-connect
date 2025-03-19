import { createSelector } from "@reduxjs/toolkit";

export const selectCatteryDetailsSelectors = createSelector(
  (state) => state.catteryDetails,
  (catteryDetails) => ({
    catteryDetailsIsLoading: catteryDetails.catteryDetailsIsLoading,
    catteryDetails: catteryDetails.catteryDetails,
    catteryDetailsResult: catteryDetails.catteryDetailsResult,
    catteryDetailsError: catteryDetails.catteryDetailsError,
  })
);

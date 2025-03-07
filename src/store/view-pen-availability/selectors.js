import { createSelector } from "@reduxjs/toolkit";

export const selectViewPenAvailabilitySelectors = createSelector(
  (state) => state.viewPenAvailability,
  (viewPenAvailability) => ({
    chosenDatePenDataIsLoading: viewPenAvailability.chosenDatePenDataIsLoading,
    chosenDatePenData: viewPenAvailability.chosenDatePenData,
    chosenDatePenDataResult: viewPenAvailability.chosenDatePenDataResult,
    chosenDatePenDataError: viewPenAvailability.chosenDatePenDataError,
  })
);

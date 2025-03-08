import { createSelector } from "@reduxjs/toolkit";

export const selectViewPenDataSelectors = createSelector(
  (state) => state.viewPenData,
  (viewPenData) => ({
    chosenDatePenDataIsLoading: viewPenData.chosenDatePenDataIsLoading,
    chosenDatePenData: viewPenData.chosenDatePenData,
    chosenDatePenDataResult: viewPenData.chosenDatePenDataResult,
    chosenDatePenDataError: viewPenData.chosenDatePenDataError,
  })
);

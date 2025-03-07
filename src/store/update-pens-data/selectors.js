import { createSelector } from "@reduxjs/toolkit";

export const selectUpdatePensDataSelectors = createSelector(
  (state) => state.updatePensData,
  (updatePensData) => ({
    updatePensDataIsLoading: updatePensData.updatePensDataIsLoading,
    updatePensDataResult: updatePensData.updatePensDataResult,
    updatePensDataError: updatePensData.updatePensDataError,
  })
);

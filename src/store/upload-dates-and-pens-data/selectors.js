import { createSelector } from "@reduxjs/toolkit";

export const selectUploadDatesAndPensDataSelectors = createSelector(
  (state) => state.uploadDatesAndPensData,
  (uploadDatesAndPensData) => ({
    uploadDatesAndPensDataIsLoading:
      uploadDatesAndPensData.uploadDatesAndPensDataIsLoading,
    datesAndPensData: uploadDatesAndPensData.datesAndPensData,
    datesIncludeDaysClosed: uploadDatesAndPensData.datesIncludeDaysClosed,
    dateClosedToAdd: uploadDatesAndPensData.dateClosedToAdd,
    datesClosedArray: uploadDatesAndPensData.datesClosedArray,
    uploadDatesAndPensDataResult:
      uploadDatesAndPensData.uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError:
      uploadDatesAndPensData.uploadDatesAndPensDataError,
  })
);

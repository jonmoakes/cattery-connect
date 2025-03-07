import { createSelector } from "@reduxjs/toolkit";

export const selectUploadBookingDataSelectors = createSelector(
  (state) => state.uploadBookingData,
  (uploadBookingData) => ({
    uploadBookingDataIsLoading: uploadBookingData.uploadBookingDataIsLoading,
    uploadBookingDataResult: uploadBookingData.uploadBookingDataResult,
    uploadBookingDataError: uploadBookingData.uploadBookingDataError,
    uploadBookingData: uploadBookingData.uploadBookingData,
  })
);

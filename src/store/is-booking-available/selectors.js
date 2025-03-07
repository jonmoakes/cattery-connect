import { createSelector } from "@reduxjs/toolkit";

export const selectIsBookingAvailableSelectors = createSelector(
  (state) => state.isBookingAvailable,
  (isBookingAvailable) => ({
    isBookingAvailableIsLoading: isBookingAvailable.isBookingAvailableIsLoading,
    isBookingAvailableResult: isBookingAvailable.isBookingAvailableResult,
    isBookingAvailableError: isBookingAvailable.isBookingAvailableError,
    showIneligibleDates: isBookingAvailable.showIneligibleDates,
  })
);

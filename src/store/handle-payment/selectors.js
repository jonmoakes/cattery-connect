import { createSelector } from "@reduxjs/toolkit";

export const selectHandlePaymentSelectors = createSelector(
  (state) => state.handlePayment,
  (handlePayment) => ({
    attemptPaymentIsLoading: handlePayment.attemptPaymentIsLoading,
    paymentStatus: handlePayment.paymentStatus,
    paymentError: handlePayment.paymentError,
    documentIdOfBooking: handlePayment.documentIdOfBooking,
  })
);

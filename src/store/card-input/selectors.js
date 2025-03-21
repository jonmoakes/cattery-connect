import { createSelector } from "@reduxjs/toolkit";

export const selectCardInputSelectors = createSelector(
  (state) => state.cardInput,
  (cardInput) => ({
    cardInputResult: cardInput.cardInputResult,
    showPaymentForm: cardInput.showPaymentForm,
  })
);

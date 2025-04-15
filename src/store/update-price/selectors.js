import { createSelector } from "@reduxjs/toolkit";

export const selectUpdatePriceSelectors = createSelector(
  (state) => state.updatePrice,
  (updatePrice) => ({
    updatePriceIsLoading: updatePrice.updatePriceIsLoading,
    updatePriceResult: updatePrice.updatePriceResult,
    updatePriceError: updatePrice.updatePriceError,
    newPricingArray: updatePrice.newPricingArray,
  })
);

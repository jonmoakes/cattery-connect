import { createSelector } from "@reduxjs/toolkit";

export const selectIndividualCustomersCatsSelectors = createSelector(
  (state) => state.individualCustomersCats,
  (individualCustomersCats) => ({
    individualCustomersCatsIsLoading:
      individualCustomersCats.individualCustomersCatsIsLoading,
    individualCustomersCats: individualCustomersCats.individualCustomersCats,
    individualCustomersCatsError:
      individualCustomersCats.individualCustomersCatsError,
  })
);

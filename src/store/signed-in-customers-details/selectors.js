import { createSelector } from "@reduxjs/toolkit";

export const selectSignedInCustomerDetailsSelectors = createSelector(
  (state) => state.signedInCustomersDetails,
  (signedInCustomersDetails) => ({
    signedInCustomersDetailsIsLoading:
      signedInCustomersDetails.signedInCustomersDetailsIsLoading,
    signedInCustomersDetailsResult:
      signedInCustomersDetails.signedInCustomersDetailsResult,
    signedInCustomersDetailsError:
      signedInCustomersDetails.signedInCustomersDetailsError,
    signedInCustomersDetails: signedInCustomersDetails.signedInCustomersDetails,
  })
);

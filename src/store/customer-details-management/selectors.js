import { createSelector } from "@reduxjs/toolkit";

export const selectCustomerDetailsManagementSelectors = createSelector(
  (state) => state.customerDetailsManagement,
  (customerDetailsManagement) => ({
    customerDetails: customerDetailsManagement.customerDetails,
    customerDetailsForFormComparison:
      customerDetailsManagement.customerDetailsForFormComparison,
    customerDetailsManagementIsLoading:
      customerDetailsManagement.customerDetailsManagementIsLoading,
    addCustomerResult: customerDetailsManagement.addCustomerResult,
    addCustomerError: customerDetailsManagement.addCustomerError,
    editCustomerResult: customerDetailsManagement.editCustomerResult,
    editCustomerError: customerDetailsManagement.editCustomerError,
    deleteCustomerResult: customerDetailsManagement.deleteCustomerResult,
    deleteCustomerError: customerDetailsManagement.deleteCustomerError,
    deleteCustomersCatsIsLoading:
      customerDetailsManagement.deleteCustomersCatsIsLoading,
    deleteCustomersCatsResult:
      customerDetailsManagement.deleteCustomersCatsResult,
    deleteCustomersCatsError:
      customerDetailsManagement.deleteCustomersCatsError,
  })
);

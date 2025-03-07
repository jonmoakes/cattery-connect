import { createSelector } from "@reduxjs/toolkit";

export const selectGetAllCustomersSelectors = createSelector(
  (state) => state.getAllCustomers,
  (getAllCustomers) => ({
    getAllCustomersIsLoading: getAllCustomers.getAllCustomersIsLoading,
    allCustomers: getAllCustomers.allCustomers,
    getAllCustomersError: getAllCustomers.getAllCustomersError,
  })
);

import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const customerDetailsManagementSlice = createSlice({
  name: "customerDetailsManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setCustomerDetails(state, action) {
      state.customerDetails = action.payload;
    },
    resetCustomerDetails(state) {
      state.customerDetails = {};
    },
    setCustomerDetailForFormComparison(state, action) {
      state.customerDetailsForFormComparison = action.payload;
    },
    resetAddCustomerResult(state) {
      state.addCustomerResult = "";
    },
    resetAddCustomerError(state) {
      state.addCustomerError = null;
    },
    resetEditCustomerResult(state) {
      state.editCustomerResult = "";
    },
    resetEditCustomerError(state) {
      state.editCustomerError = null;
    },
    resetDeleteCustomersCatsResult(state) {
      state.deleteCustomersCatsResult = "";
    },
    resetDeleteCustomersCatsError(state) {
      state.deleteCustomersCatsError = null;
    },
    resetCustomerDetailsManagementState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setCustomerDetails,
  setCustomerDetailForFormComparison,
  resetCustomerDetails,
  resetAddCustomerResult,
  resetAddCustomerError,
  resetEditCustomerResult,
  resetEditCustomerError,
  resetDeleteCustomersCatsResult,
  resetDeleteCustomersCatsError,
  resetCustomerDetailsManagementState,
} = customerDetailsManagementSlice.actions;

export const customerDetailsManagementReducer =
  customerDetailsManagementSlice.reducer;

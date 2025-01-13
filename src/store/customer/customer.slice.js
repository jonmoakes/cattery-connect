import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addCustomerAsync } from "./customer.thunks";

const defaultCustomerDetails = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  emergencyContactDetails: "",
};

const INITIAL_STATE = {
  customerIsLoading: false,
  customerDetails: defaultCustomerDetails,
  customerResult: "",
  customerError: null,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: INITIAL_STATE,
  reducers: {
    setCustomerDetails(state, action) {
      state.customerDetails = action.payload;
    },
    resetCustomerResult(state) {
      state.customerResult = "";
    },
    resetCustomerError(state) {
      state.customerError = null;
    },
    resetCustomerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomerAsync.pending, (state) => {
        state.customerIsLoading = true;
      })
      .addCase(addCustomerAsync.fulfilled, (state) => {
        state.customerIsLoading = false;
        state.customerResult = "fulfilled";
        state.customerError = null;
      })
      .addCase(addCustomerAsync.rejected, (state, action) => {
        state.customerIsLoading = false;
        state.customerResult = "rejected";
        state.customerError = action.payload;
      });
  },
  selectors: {
    selectCustomerDetailsSelectors: createSelector(
      (state) => state.customerDetails,
      (state) => state.customerIsLoading,
      (state) => state.customerResult,
      (state) => state.customerError,
      (customerDetails, customerIsLoading, customerResult, customerError) => {
        return {
          customerDetails,
          customerIsLoading,
          customerResult,
          customerError,
        };
      }
    ),
  },
});

export const {
  setCustomerDetails,
  resetCustomerResult,
  resetCustomerError,
  resetCustomerState,
} = customerSlice.actions;
export const { selectCustomerDetailsSelectors } = customerSlice.selectors;

export const customerReducer = customerSlice.reducer;

import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addCustomerAsync,
  editCustomerAsync,
  deleteCustomerAsync,
} from "./customer-details-management.thunks";

const defaultCustomerDetails = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  emergencyContactDetails: "",
};

const INITIAL_STATE = {
  customerDetailsManagementIsLoading: false,
  customerDetails: defaultCustomerDetails,
  addCustomerResult: "",
  addCustomerError: null,
  editCustomerResult: "",
  editCustomerError: null,
  deleteCustomerResult: "",
  deleteCustomerError: null,
};

export const customerDetailsManagementSlice = createSlice({
  name: "customerDetailsManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setCustomerDetails(state, action) {
      state.customerDetails = action.payload;
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
    resetDeleteCustomerResult(state) {
      state.deleteCustomerResult = "";
    },
    resetDeleteCustomerError(state) {
      state.deleteCustomerError = null;
    },
    resetCustomerDetailsManagementState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomerAsync.pending, (state) => {
        state.customerDetailsManagementIsLoading = true;
      })
      .addCase(addCustomerAsync.fulfilled, (state) => {
        state.customerDetailsManagementIsLoading = false;
        state.addCustomerResult = "fulfilled";
        state.addCustomerError = null;
      })
      .addCase(addCustomerAsync.rejected, (state, action) => {
        state.customerDetailsManagementIsLoading = false;
        state.addCustomerResult = "rejected";
        state.addCustomerError = action.payload;
      })
      .addCase(editCustomerAsync.pending, (state) => {
        state.customerDetailsManagementIsLoading = true;
      })
      .addCase(editCustomerAsync.fulfilled, (state) => {
        state.customerDetailsManagementIsLoading = false;
        state.editCustomerResult = "fulfilled";
        state.editCustomerError = null;
      })
      .addCase(editCustomerAsync.rejected, (state, action) => {
        state.customerDetailsManagementIsLoading = false;
        state.editCustomerResult = "rejected";
        state.editCustomerError = action.payload;
      })
      .addCase(deleteCustomerAsync.pending, (state) => {
        state.customerDetailsManagementIsLoading = true;
      })
      .addCase(deleteCustomerAsync.fulfilled, (state) => {
        state.customerDetailsManagementIsLoading = false;
        state.deleteCustomerResult = "fulfilled";
        state.deleteCustomerError = null;
      })
      .addCase(deleteCustomerAsync.rejected, (state, action) => {
        state.customerDetailsManagementIsLoading = false;
        state.deleteCustomerResult = "rejected";
        state.deleteCustomerError = action.payload;
      });
  },
  selectors: {
    selectCustomerDetailsManagementSelectors: createSelector(
      (state) => state.customerDetails,
      (state) => state.customerDetailsManagementIsLoading,
      (state) => state.addCustomerResult,
      (state) => state.addCustomerError,
      (state) => state.editCustomerResult,
      (state) => state.editCustomerError,
      (state) => state.deleteCustomerResult,
      (state) => state.deleteCustomerError,
      (
        customerDetails,
        customerDetailsManagementIsLoading,
        addCustomerResult,
        addCustomerError,
        editCustomerResult,
        editCustomerError,
        deleteCustomerResult,
        deleteCustomerError
      ) => {
        return {
          customerDetails,
          customerDetailsManagementIsLoading,
          addCustomerResult,
          addCustomerError,
          editCustomerResult,
          editCustomerError,
          deleteCustomerResult,
          deleteCustomerError,
        };
      }
    ),
  },
});

export const {
  setCustomerDetails,
  resetAddCustomerResult,
  resetAddCustomerError,
  resetEditCustomerResult,
  resetEditCustomerError,
  resetDeleteCustomerResult,
  resetDeleteCustomerError,
  resetCustomerDetailsManagementState,
} = customerDetailsManagementSlice.actions;
export const { selectCustomerDetailsManagementSelectors } =
  customerDetailsManagementSlice.selectors;

export const customerDetailsManagementReducer =
  customerDetailsManagementSlice.reducer;

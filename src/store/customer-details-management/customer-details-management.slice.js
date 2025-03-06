import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addCustomerAsync,
  editCustomerAsync,
  deleteCustomerAsync,
  deleteCustomersCatsAsync,
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
  customerDetailsForFormComparison: {},
  addCustomerResult: "",
  addCustomerError: null,
  editCustomerResult: "",
  editCustomerError: null,
  deleteCustomersCatsIsLoading: false,
  deleteCustomersCatsResult: "",
  deleteCustomersCatsError: null,
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
    resetCustomerDetails(state) {
      state.customerDetails = defaultCustomerDetails;
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
      .addCase(deleteCustomersCatsAsync.pending, (state) => {
        state.deleteCustomersCatsIsLoading = true;
      })
      .addCase(deleteCustomersCatsAsync.fulfilled, (state) => {
        state.deleteCustomersCatsIsLoading = false;
        state.deleteCustomersCatsResult = "fulfilled";
        state.deleteCustomersCatsError = null;
      })
      .addCase(deleteCustomersCatsAsync.rejected, (state, action) => {
        state.deleteCustomersCatsIsLoading = false;
        state.deleteCustomersCatsResult = "rejected";
        state.deleteCustomersCatsError = action.payload;
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

export const selectCustomerDetailsManagementSelectors = createSelector(
  (state) => state.customerDetailsManagement,
  (customerDetailsManagement) => ({
    customerDetails: customerDetailsManagement.customerDetails,
    customerDetailsForFormComparison: customerDetailsManagement.customerDetails,
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

export const customerDetailsManagementReducer =
  customerDetailsManagementSlice.reducer;

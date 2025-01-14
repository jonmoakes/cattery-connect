import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addCustomerToDbAsync } from "./add-customer.thunks";

const defaultCustomerDetails = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  emergencyContactDetails: "",
};

const INITIAL_STATE = {
  addCustomerIsLoading: false,
  addCustomerDetails: defaultCustomerDetails,
  addCustomerResult: "",
  addCustomerError: null,
};

export const addCustomerSlice = createSlice({
  name: "addCustomer",
  initialState: INITIAL_STATE,
  reducers: {
    setAddCustomerDetails(state, action) {
      state.addCustomerDetails = action.payload;
    },
    resetAddCustomerResult(state) {
      state.addCustomerResult = "";
    },
    resetAddCustomerError(state) {
      state.addCustomerError = null;
    },
    resetAddCustomerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCustomerToDbAsync.pending, (state) => {
        state.addCustomerIsLoading = true;
      })
      .addCase(addCustomerToDbAsync.fulfilled, (state) => {
        state.addCustomerIsLoading = false;
        state.addCustomerResult = "fulfilled";
        state.addCustomerError = null;
      })
      .addCase(addCustomerToDbAsync.rejected, (state, action) => {
        state.addCustomerIsLoading = false;
        state.addCustomerResult = "rejected";
        state.addCustomerError = action.payload;
      });
  },
  selectors: {
    selectAddCustomerDetailsSelectors: createSelector(
      (state) => state.addCustomerDetails,
      (state) => state.addCustomerIsLoading,
      (state) => state.addCustomerResult,
      (state) => state.addCustomerError,
      (
        addCustomerDetails,
        addCustomerIsLoading,
        addCustomerResult,
        addCustomerError
      ) => {
        return {
          addCustomerDetails,
          addCustomerIsLoading,
          addCustomerResult,
          addCustomerError,
        };
      }
    ),
  },
});

export const {
  setAddCustomerDetails,
  resetAddCustomerResult,
  resetAddCustomerError,
  resetAddCustomerState,
} = addCustomerSlice.actions;
export const { selectAddCustomerDetailsSelectors } = addCustomerSlice.selectors;

export const addCustomerReducer = addCustomerSlice.reducer;

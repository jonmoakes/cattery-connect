import { createSelector, createSlice } from "@reduxjs/toolkit";
import { deleteCustomerFromDbAsync } from "./delete-customer.thunks";

const INITIAL_STATE = {
  deleteCustomerIsLoading: false,
  deleteCustomerResult: "",
  deleteCustomerError: null,
};

export const deleteCustomerSlice = createSlice({
  name: "deleteCustomer",
  initialState: INITIAL_STATE,
  reducers: {
    resetDeleteCustomerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCustomerFromDbAsync.pending, (state) => {
        state.deleteCustomerIsLoading = true;
      })
      .addCase(deleteCustomerFromDbAsync.fulfilled, (state) => {
        state.deleteCustomerIsLoading = false;
        state.deleteCustomerResult = "fulfilled";
        state.deleteCustomerError = null;
      })
      .addCase(deleteCustomerFromDbAsync.rejected, (state, action) => {
        state.deleteCustomerIsLoading = false;
        state.deleteCustomerResult = "rejected";
        state.deleteCustomerError = action.payload;
      });
  },
  selectors: {
    selectDeleteCustomerSelectors: createSelector(
      (state) => state.deleteCustomerIsLoading,
      (state) => state.deleteCustomerResult,
      (state) => state.deleteCustomerError,
      (deleteCustomerIsLoading, deleteCustomerResult, deleteCustomerError) => {
        return {
          deleteCustomerIsLoading,
          deleteCustomerResult,
          deleteCustomerError,
        };
      }
    ),
  },
});

export const { resetDeleteCustomerState } = deleteCustomerSlice.actions;
export const { selectDeleteCustomerSelectors } = deleteCustomerSlice.selectors;

export const deleteCustomerReducer = deleteCustomerSlice.reducer;

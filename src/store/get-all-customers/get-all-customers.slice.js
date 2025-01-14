import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllOwnersCustomersAsync } from "./get-all-customers.thunks";

const INITIAL_STATE = {
  getAllCustomersIsLoading: false,
  allCustomers: [],
  getAllCustomersError: null,
};

export const getAllCustomersSlice = createSlice({
  name: "getAllCustomers",
  initialState: INITIAL_STATE,
  reducers: {
    setAllCustomers(state, action) {
      state.allCustomers = action.payload;
    },
    resetGetAllCustomersError(state) {
      state.getAllCustomersError = null;
    },
    resetGetAllCustomersState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectGetAllCustomersSelectors: createSelector(
      (state) => state.getAllCustomersIsLoading,
      (state) => state.allCustomers,
      (state) => state.getAllCustomersError,
      (getAllCustomersIsLoading, allCustomers, getAllCustomersError) => {
        return {
          getAllCustomersIsLoading,
          allCustomers,
          getAllCustomersError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOwnersCustomersAsync.pending, (state) => {
        state.getAllCustomersIsLoading = true;
      })
      .addCase(getAllOwnersCustomersAsync.fulfilled, (state, action) => {
        state.getAllCustomersIsLoading = false;
        state.allCustomers = action.payload;
        state.getAllCustomersError = null;
      })
      .addCase(getAllOwnersCustomersAsync.rejected, (state, action) => {
        state.getAllCustomersIsLoading = false;
        state.allCustomers = [];
        state.getAllCustomersError = action.payload;
      });
  },
});

export const {
  resetGetAllCustomersError,
  resetGetAllCustomersState,
  setAllCustomers,
} = getAllCustomersSlice.actions;
export const { selectGetAllCustomersSelectors } =
  getAllCustomersSlice.selectors;

export const getAllCustomersReducer = getAllCustomersSlice.reducer;

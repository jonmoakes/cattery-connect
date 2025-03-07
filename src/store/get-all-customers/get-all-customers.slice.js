import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

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
  extraReducers,
});

export const {
  resetGetAllCustomersError,
  resetGetAllCustomersState,
  setAllCustomers,
} = getAllCustomersSlice.actions;

export const getAllCustomersReducer = getAllCustomersSlice.reducer;

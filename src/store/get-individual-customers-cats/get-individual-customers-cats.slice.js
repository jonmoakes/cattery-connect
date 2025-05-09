import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const individualCustomersCatsSlice = createSlice({
  name: "individualCustomersCats",
  initialState: INITIAL_STATE,
  reducers: {
    setIndividualCustomersCats(state, action) {
      state.individualCustomersCats = action.payload;
    },
    resetIndividualCustomersCatsError(state) {
      state.individualCustomersCatsError = null;
    },
    resetIndividualCustomersCatsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setIndividualCustomersCats,
  resetIndividualCustomersCatsError,
  resetIndividualCustomersCatsState,
} = individualCustomersCatsSlice.actions;

export const individualCustomersCatsReducer =
  individualCustomersCatsSlice.reducer;

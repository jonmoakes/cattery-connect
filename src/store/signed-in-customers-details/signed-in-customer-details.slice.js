import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

const signedInCustomersDetailsSlice = createSlice({
  name: "signedInCustomersDetails",
  initialState: INITIAL_STATE,
  reducers: {
    resetSignedInCustomersDetailsResult(state) {
      state.signedInCustomersDetailsResult = "";
    },
    resetSignedInCustomersDetailsError(state) {
      state.signedInCustomersDetailsError = null;
    },
    resetSignedInCustomersDetailsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  resetSignedInCustomersDetailsResult,
  resetSignedInCustomersDetailsError,
  resetSignedInCustomersDetailsState,
} = signedInCustomersDetailsSlice.actions;
export const signedInCustomersDetailsReducer =
  signedInCustomersDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const updateEmailSlice = createSlice({
  name: "updateEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setUpdateEmailDetails(state, action) {
      state.updateEmailDetails = action.payload;
    },
    resetUpdateEmailResult(state) {
      state.updateEmailResult = "";
    },
    resetUpdateEmailError(state) {
      state.updateEmailError = null;
    },
    resetUpdateEmailState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setUpdateEmailDetails,
  resetUpdateEmailState,
  resetUpdateEmailResult,
  resetUpdateEmailError,
} = updateEmailSlice.actions;
export const { selectUpdateEmailSelectors } = updateEmailSlice.selectors;

export const updateEmailReducer = updateEmailSlice.reducer;

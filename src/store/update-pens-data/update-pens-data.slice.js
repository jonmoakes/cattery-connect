import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const updatePensDataSlice = createSlice({
  name: "updatePensData",
  initialState: INITIAL_STATE,
  reducers: {
    resetUpdatePensDataResult(state) {
      state.updatePensDataResult = "";
    },
    resetUpdatePensDataError(state) {
      state.updatePensDataError = null;
    },
    resetUpdatePensDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  resetUpdatePensDataResult,
  resetUpdatePensDataError,
  resetUpdatePensDataState,
} = updatePensDataSlice.actions;

export const updatePensDataReducer = updatePensDataSlice.reducer;

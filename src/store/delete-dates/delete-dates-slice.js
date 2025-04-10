import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const deleteDatesSlice = createSlice({
  name: "deleteDates",
  initialState: INITIAL_STATE,
  reducers: {
    setDateDataToPass(state, action) {
      state.dateDataToPass = action.payload;
    },
    resetDeleteDateDocumentsResult(state) {
      state.deleteDateDocumentsResult = "";
    },
    resetDeleteDateDocumentsError(state) {
      state.deleteDateDocumentsError = null;
    },
    resetDeletePastDatesState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setDateDataToPass,
  resetDeleteDateDocumentsResult,
  resetDeleteDateDocumentsError,
  resetDeletePastDatesState,
} = deleteDatesSlice.actions;

export const deleteDatesReducer = deleteDatesSlice.reducer;

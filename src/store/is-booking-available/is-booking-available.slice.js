import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const isBookingAvailableSlice = createSlice({
  name: "isBookingAvailable",
  initialState: INITIAL_STATE,
  reducers: {
    resetIsBookingAvailableResult(state) {
      state.isBookingAvailableResult = "";
    },
    resetIsBookingAvailableError(state) {
      state.isBookingAvailableError = null;
    },
    setShowIneligibleDates(state, action) {
      state.showIneligibleDates = action.payload;
    },
    resetIsBookingAvailableState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  resetIsBookingAvailableResult,
  resetIsBookingAvailableError,
  setShowIneligibleDates,
  resetIsBookingAvailableState,
} = isBookingAvailableSlice.actions;

export const isBookingAvailableReducer = isBookingAvailableSlice.reducer;

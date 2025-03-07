import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const cancelBookingSlice = createSlice({
  name: "cancelBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setDataFromBooking(state, action) {
      state.dataFromBooking = action.payload;
    },
    resetFetchAvailabilityDocsToUpdateResult(state) {
      state.fetchAvailabilityDocsToUpdateResult = "";
    },
    resetFetchAvailabilityDocsToUpdateError(state) {
      state.fetchAvailabilityDocsToUpdateError = null;
    },
    resetDeleteBookingDataResult(state) {
      state.deleteBookingDataResult = "";
    },
    resetDeleteBookingDataError(state) {
      state.deleteBookingDataError = "";
    },
    resetCancelBookingState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setDataFromBooking,
  resetFetchAvailabilityDocsToUpdateResult,
  resetFetchAvailabilityDocsToUpdateError,
  resetDeleteBookingDataResult,
  resetDeleteBookingDataError,
  resetCancelBookingState,
} = cancelBookingSlice.actions;

export const cancelBookingReducer = cancelBookingSlice.reducer;

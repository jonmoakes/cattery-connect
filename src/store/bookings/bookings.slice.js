import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: INITIAL_STATE,
  reducers: {
    setOwnerBookings(state, action) {
      state.ownerBookings = action.payload;
    },
    resetFetchOwnerBookingsResult(state) {
      state.fetchOwnerBookingsResult = "";
    },
    resetFetchOwnerBookingsError(state) {
      state.fetchOwnerBookingsError = null;
    },
    resetUpdatePaymentStatusResult(state) {
      state.updatePaymentStatusResult = "";
    },
    resetUpdatePaymentStatusError(state) {
      state.updatePaymentStatusError = null;
    },
    resetBookingsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setOwnerBookings,
  resetFetchOwnerBookingsResult,
  resetFetchOwnerBookingsError,
  resetUpdatePaymentStatusResult,
  resetUpdatePaymentStatusError,
  resetBookingsState,
} = bookingsSlice.actions;

export const bookingsReducer = bookingsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

const signedInCustomersBookingsSlice = createSlice({
  name: "signedInCustomersBookings",
  initialState: INITIAL_STATE,
  reducers: {
    setBookingConfirmationDetailsInfo(state, action) {
      state.bookingConfirmationDetailsInfo = action.payload;
    },
    resetSignedInCustomersDetailsResult(state) {
      state.signedInCustomersBookingsResult = "";
    },
    resetSignedInCustomersBookingsError(state) {
      state.signedInCustomersBookingsError = null;
    },
    resetSignedInCustomersBookingsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setBookingConfirmationDetailsInfo,
  resetSignedInCustomersBookingsResult,
  resetSignedInCustomersBookingsError,
  resetSignedInCustomersBookingsState,
} = signedInCustomersBookingsSlice.actions;
export const signedInCustomersBookingsReducer =
  signedInCustomersBookingsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

const handlePaymentSlice = createSlice({
  name: "handlePayment",
  initialState: INITIAL_STATE,
  reducers: {
    setDocumentIdOfBooking(state, action) {
      state.documentIdOfBooking = action.payload;
    },
    resetPaymentStatus(state) {
      state.paymentStatus = null;
    },
    resetPaymentError(state) {
      state.paymentError = null;
    },
    resetHandlePaymentState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setDocumentIdOfBooking,
  resetPaymentStatus,
  resetPaymentError,
  resetHandlePaymentState,
} = handlePaymentSlice.actions;
export const handlePaymentReducer = handlePaymentSlice.reducer;

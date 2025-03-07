import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const requiredCatteryDataForBookingSlice = createSlice({
  name: "requiredCatteryDataForBooking",
  initialState: INITIAL_STATE,
  reducers: {
    resetRequiredCatteryDataForBookingState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const { resetRequiredCatteryDataForBookingState } =
  requiredCatteryDataForBookingSlice.actions;
export const requiredDataForCatteryBookingReducer =
  requiredCatteryDataForBookingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const viewPenAvailabilitySlice = createSlice({
  name: "viewPenAvailability",
  initialState: INITIAL_STATE,
  reducers: {
    resetViewPenAvailabilityState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const { resetViewPenAvailabilityState } =
  viewPenAvailabilitySlice.actions;

export const viewPenAvailabilityReducer = viewPenAvailabilitySlice.reducer;

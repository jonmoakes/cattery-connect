import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const dailyScheduleSlice = createSlice({
  name: "dailySchedule",
  initialState: INITIAL_STATE,
  reducers: {
    resetDailyBookingsDataResult(state) {
      state.dailyBookingsDataResult = "";
    },
    resetDailyBookingsDataError(state) {
      state.dailyBookingsDataError = null;
    },
    resetDailyScheduleState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  resetDailyBookingsDataResult,
  resetDailyBookingsDataError,
  resetDailyScheduleState,
} = dailyScheduleSlice.actions;

export const dailyScheduleReducer = dailyScheduleSlice.reducer;

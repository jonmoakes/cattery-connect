import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getDailyBookingsDataAsync } from "./daily-schedule.thunks";

const INITIAL_STATE = {
  dailyScheduleIsLoading: false,
  dailyBookingsData: [],
  dailyBookingsDataResult: "",
  dailyBookingsDataError: null,
};

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
  selectors: {
    selectDailyScheduleSelectors: createSelector(
      (state) => state.dailyScheduleIsLoading,
      (state) => state.dailyBookingsData,
      (state) => state.dailyBookingsDataResult,
      (state) => state.dailyBookingsDataError,
      (
        dailyScheduleIsLoading,
        dailyBookingsData,
        dailyBookingsDataResult,
        dailyBookingsDataError
      ) => {
        return {
          dailyScheduleIsLoading,
          dailyBookingsData,
          dailyBookingsDataResult,
          dailyBookingsDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDailyBookingsDataAsync.pending, (state) => {
        state.dailyScheduleIsLoading = true;
      })
      .addCase(getDailyBookingsDataAsync.fulfilled, (state, action) => {
        state.dailyScheduleIsLoading = false;
        state.dailyBookingsDataResult = "fulfilled";
        state.dailyBookingsData = action.payload;
        state.dailyBookingsDataError = null;
      })
      .addCase(getDailyBookingsDataAsync.rejected, (state, action) => {
        state.dailyScheduleIsLoading = false;
        state.dailyBookingsDataResult = "rejected";
        state.dailyBookingsData = [];
        state.dailyBookingsDataError = action.payload;
      });
  },
});

export const {
  resetDailyBookingsDataResult,
  resetDailyBookingsDataError,
  resetDailyScheduleState,
} = dailyScheduleSlice.actions;
export const { selectDailyScheduleSelectors } = dailyScheduleSlice.selectors;

export const dailyScheduleReducer = dailyScheduleSlice.reducer;

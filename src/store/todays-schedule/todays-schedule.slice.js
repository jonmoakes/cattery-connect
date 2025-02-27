import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getTodaysBookingsRequiredDataAsync } from "./todays-schedule.thunks";

const INITIAL_STATE = {
  todaysScheduleIsLoading: false,
  todaysBookingsData: [],
  todaysBookingsDataResult: "",
  todaysBookingsDataError: null,
};

export const todaysScheduleSlice = createSlice({
  name: "todaysSchedule",
  initialState: INITIAL_STATE,
  reducers: {
    resetTodaysBookingsDataResult(state) {
      state.todaysBookingsDataResult = "";
    },
    resetTodaysBookingsDataError(state) {
      state.todaysBookingsDataError = null;
    },
    resetGetTodaysScheduleState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectTodaysScheduleSelectors: createSelector(
      (state) => state.todaysScheduleIsLoading,
      (state) => state.todaysBookingsData,
      (state) => state.todaysBookingsDataResult,
      (state) => state.todaysBookingsDataError,
      (
        todaysScheduleIsLoading,
        todaysBookingsData,
        todaysBookingsDataResult,
        todaysBookingsDataError
      ) => {
        return {
          todaysScheduleIsLoading,
          todaysBookingsData,
          todaysBookingsDataResult,
          todaysBookingsDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodaysBookingsRequiredDataAsync.pending, (state) => {
        state.todaysScheduleIsLoading = true;
      })
      .addCase(
        getTodaysBookingsRequiredDataAsync.fulfilled,
        (state, action) => {
          state.todaysScheduleIsLoading = false;
          state.todaysBookingsDataResult = "fulfilled";
          state.todaysBookingsData = action.payload;
          state.todaysBookingsDataError = null;
        }
      )
      .addCase(getTodaysBookingsRequiredDataAsync.rejected, (state, action) => {
        state.todaysScheduleIsLoading = false;
        state.todaysBookingsDataResult = "rejected";
        state.todaysBookingsData = [];
        state.todaysBookingsDataError = action.payload;
      });
  },
});

export const {
  resetTodaysBookingsDataResult,
  resetTodaysBookingsDataError,
  resetGetTodaysScheduleState,
} = todaysScheduleSlice.actions;
export const { selectTodaysScheduleSelectors } = todaysScheduleSlice.selectors;

export const todaysScheduleReducer = todaysScheduleSlice.reducer;

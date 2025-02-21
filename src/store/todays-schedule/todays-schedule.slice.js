import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getTodaysScheduleAsync } from "./todays-schedule.thunks";

const INITIAL_STATE = {
  todaysScheduleIsLoading: false,
  todaysScheduleData: [],
  todaysScheduleError: null,
};

export const todaysScheduleSlice = createSlice({
  name: "todaysSchedule",
  initialState: INITIAL_STATE,
  reducers: {
    setTodaysScheduleData(state, action) {
      state.todaysScheduleData = action.payload;
    },
    resetGetTodaysScheduleError(state) {
      state.todaysScheduleError = null;
    },
    resetGetTodaysScheduleState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectTodaysScheduleSelectors: createSelector(
      (state) => state.todaysScheduleIsLoading,
      (state) => state.todaysScheduleData,
      (state) => state.todaysScheduleError,
      (todaysScheduleIsLoading, todaysScheduleData, todaysScheduleError) => {
        return {
          todaysScheduleIsLoading,
          todaysScheduleData,
          todaysScheduleError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodaysScheduleAsync.pending, (state) => {
        state.todaysScheduleIsLoading = true;
      })
      .addCase(getTodaysScheduleAsync.fulfilled, (state, action) => {
        state.todaysScheduleIsLoading = false;
        state.todaysScheduleData = action.payload;
        state.todaysScheduleError = null;
      })
      .addCase(getTodaysScheduleAsync.rejected, (state, action) => {
        state.todaysScheduleIsLoading = false;
        state.todaysScheduleData = [];
        state.todaysScheduleError = action.payload;
      });
  },
});

export const {
  resetGetTodaysScheduleError,
  resetGetTodaysScheduleState,
  setTodaysScheduleData,
} = todaysScheduleSlice.actions;
export const { selectTodaysScheduleSelectors } = todaysScheduleSlice.selectors;

export const todaysScheduleReducer = todaysScheduleSlice.reducer;

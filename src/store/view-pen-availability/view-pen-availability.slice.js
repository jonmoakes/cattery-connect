import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchChosenDaysPenDataAsync } from "./view-pen-availability.thunks";

const INITIAL_STATE = {
  chosenDatePenDataIsLoading: false,
  chosenDatePenData: {},
  chosenDatePenDataResult: "",
  chosenDatePenDataError: null,
};

export const viewPenAvailabilitySlice = createSlice({
  name: "viewPenAvailability",
  initialState: INITIAL_STATE,
  reducers: {
    resetViewPenAvailabilityState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChosenDaysPenDataAsync.pending, (state) => {
        state.chosenDatePenDataIsLoading = true;
      })
      .addCase(fetchChosenDaysPenDataAsync.fulfilled, (state, action) => {
        state.chosenDatePenDataIsLoading = false;
        state.chosenDatePenDataResult = "fulfilled";
        state.chosenDatePenData = action.payload;
        state.chosenDatePenDataError = null;
      })
      .addCase(fetchChosenDaysPenDataAsync.rejected, (state, action) => {
        state.chosenDatePenDataIsLoading = false;
        state.chosenDatePenDataResult = "rejected";
        state.chosenDatePenData = {};
        state.chosenDatePenDataError = action.payload;
      });
  },
  selectors: {
    selectViewPenAvailabilitySelectors: createSelector(
      (state) => state.chosenDatePenDataIsLoading,
      (state) => state.chosenDatePenData,
      (state) => state.chosenDatePenDataResult,
      (state) => state.chosenDatePenDataError,

      (
        chosenDatePenDataIsLoading,
        chosenDatePenData,
        chosenDatePenDataResult,
        chosenDatePenDataError
      ) => {
        return {
          chosenDatePenDataIsLoading,
          chosenDatePenData,
          chosenDatePenDataResult,
          chosenDatePenDataError,
        };
      }
    ),
  },
});

export const { resetViewPenAvailabilityState } =
  viewPenAvailabilitySlice.actions;
export const { selectViewPenAvailabilitySelectors } =
  viewPenAvailabilitySlice.selectors;

export const viewPenAvailabilityReducer = viewPenAvailabilitySlice.reducer;

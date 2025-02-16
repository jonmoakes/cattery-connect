import { createSelector, createSlice } from "@reduxjs/toolkit";
import { checkBookingAvailabilityAsync } from "./is-booking-available.thunks";

const INITIAL_STATE = {
  isBookingAvailableIsLoading: false,
  isBookingAvailableResult: "",
  isBookingAvailableError: null,
  showIneligibleDates: false,
};

export const isBookingAvailableSlice = createSlice({
  name: "isBookingAvailable",
  initialState: INITIAL_STATE,
  reducers: {
    resetIsBookingAvailableResult(state) {
      state.isBookingAvailableResult = "";
    },
    resetIsBookingAvailableError(state) {
      state.isBookingAvailableError = null;
    },
    setShowIneligibleDates(state, action) {
      state.showIneligibleDates = action.payload;
    },
    resetIsBookingAvailableState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectIsBookingAvailableSelectors: createSelector(
      (state) => state.isBookingAvailableIsLoading,
      (state) => state.isBookingAvailableResult,
      (state) => state.isBookingAvailableError,
      (state) => state.showIneligibleDates,
      (
        isBookingAvailableIsLoading,
        isBookingAvailableResult,
        isBookingAvailableError,
        showIneligibleDates
      ) => {
        return {
          isBookingAvailableIsLoading,
          isBookingAvailableResult,
          isBookingAvailableError,
          showIneligibleDates,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkBookingAvailabilityAsync.pending, (state) => {
        state.isBookingAvailableIsLoading = true;
      })
      .addCase(checkBookingAvailabilityAsync.fulfilled, (state, action) => {
        state.isBookingAvailableIsLoading = false;
        state.isBookingAvailableResult = action.payload;
        state.isBookingAvailableError = null;
      })
      .addCase(checkBookingAvailabilityAsync.rejected, (state, action) => {
        state.isBookingAvailableIsLoading = false;
        state.isBookingAvailableResult = "rejected";
        state.isBookingAvailableError = action.payload;
      });
  },
});

export const {
  resetIsBookingAvailableResult,
  resetIsBookingAvailableError,
  setShowIneligibleDates,
  resetIsBookingAvailableState,
} = isBookingAvailableSlice.actions;
export const { selectIsBookingAvailableSelectors } =
  isBookingAvailableSlice.selectors;

export const isBookingAvailableReducer = isBookingAvailableSlice.reducer;

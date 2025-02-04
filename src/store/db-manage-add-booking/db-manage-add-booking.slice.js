import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  checkBookingAvailabilityAsync,
  getAllowsLargerPensBoolAsync,
} from "./db-manage-add-booking.thunks";

const INITIAL_STATE = {
  dbManageAddBookingIsLoading: false,
  catteryAllowsLargerPensBool: null,
  catteryAllowsLargerPensResult: "",
  catteryAllowsLargerPensError: null,
  dbManageIsBookingAvailableIsLoading: false,
  dbManageAddBookingData: {},
  dbManageIsBookingAvailableResult: "",
  dbManageIsBookingAvailableError: null,
  dbManageAddBookingResult: "",
  dbManageAddBookingError: null,
};

export const dbManageAddBookingSlice = createSlice({
  name: "dbManageAddBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setDbManageAddBookingData(state, action) {
      state.dbManageAddBookingData = action.payload;
    },
    resetDbManageIsBookingAvailableResult(state) {
      state.dbManageIsBookingAvailableResult = "";
    },
    resetDbManageIsBookingAvailableError(state) {
      state.dbManageIsBookingAvailableError = null;
    },
    resetDbManageAddBookingResult(state) {
      state.dbManageAddBookingResult = "";
    },
    resetDbManageAddBookingError(state) {
      state.dbManageAddBookingResult = null;
    },
    resetDbManageAddBookingState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDbManageAddBookingSelectors: createSelector(
      (state) => state.dbManageAddBookingIsLoading,
      (state) => state.catteryAllowsLargerPensBool,
      (state) => state.catteryAllowsLargerPensResult,
      (state) => state.catteryAllowsLargerPensError,
      (state) => state.dbManageIsBookingAvailableIsLoading,
      (state) => state.dbManageAddBookingData,
      (state) => state.dbManageIsBookingAvailableResult,
      (state) => state.dbManageIsBookingAvailableError,
      (state) => state.dbManageAddBookingResult,
      (state) => state.dbManageAddBookingError,
      (
        dbManageAddBookingIsLoading,
        catteryAllowsLargerPensBool,
        catteryAllowsLargerPensResult,
        catteryAllowsLargerPensError,
        dbManageIsBookingAvailableIsLoading,
        dbManageAddBookingData,
        dbManageIsBookingAvailableResult,
        dbManageIsBookingAvailableError,
        dbManageAddBookingResult,
        dbManageAddBookingError
      ) => {
        return {
          dbManageAddBookingIsLoading,
          catteryAllowsLargerPensBool,
          catteryAllowsLargerPensResult,
          catteryAllowsLargerPensError,
          dbManageIsBookingAvailableIsLoading,
          dbManageAddBookingData,
          dbManageIsBookingAvailableResult,
          dbManageIsBookingAvailableError,
          dbManageAddBookingResult,
          dbManageAddBookingError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllowsLargerPensBoolAsync.pending, (state) => {
        state.dbManageIsBookingAvailableIsLoading = true;
      })
      .addCase(getAllowsLargerPensBoolAsync.fulfilled, (state, action) => {
        state.dbManageIsBookingAvailableIsLoading = false;
        state.catteryAllowsLargerPensResult = "fulfilled";
        state.catteryAllowsLargerPensBool = action.payload;
        state.catteryAllowsLargerPensError = null;
      })
      .addCase(getAllowsLargerPensBoolAsync.rejected, (state, action) => {
        state.dbManageIsBookingAvailableIsLoading = false;
        state.catteryAllowsLargerPensResult = "rejected";
        state.catteryAllowsLargerPensBool = null;
        state.catteryAllowsLargerPensError = action.payload;
      })
      .addCase(checkBookingAvailabilityAsync.pending, (state) => {
        state.dbManageIsBookingAvailableIsLoading = true;
      })
      .addCase(checkBookingAvailabilityAsync.fulfilled, (state, action) => {
        state.dbManageIsBookingAvailableIsLoading = false;
        state.dbManageIsBookingAvailableResult = action.payload;
        state.dbManageIsBookingAvailableError = null;
      })
      .addCase(checkBookingAvailabilityAsync.rejected, (state, action) => {
        state.dbManageIsBookingAvailableIsLoading = false;
        state.dbManageIsBookingAvailableResult = "rejected";
        state.dbManageIsBookingAvailableError = action.payload;
      });
  },
});

export const {
  setDbManageAddBookingData,
  resetDbManageIsBookingAvailableResult,
  resetDbManageIsBookingAvailableError,
  resetDbManageAddBookingResult,
  resetDbManageAddBookingError,
  resetDbManageAddBookingState,
} = dbManageAddBookingSlice.actions;
export const { selectDbManageAddBookingSelectors } =
  dbManageAddBookingSlice.selectors;

export const dbManageAddBookingReducer = dbManageAddBookingSlice.reducer;

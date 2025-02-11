import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  getAllowsLargerPensBoolAndMaxCatsPerPenAsync,
  checkBookingAvailabilityAsync,
  updatePensDataAsync,
  uploadBookingDataAsync,
} from "./db-manage-add-booking.thunks";

const INITIAL_STATE = {
  catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading: false,
  catteryAllowsLargerPensBoolAndMaxCatsPerPen: {},
  catteryAllowsLargerPensAndMaxCatsPerPenResult: "",
  catteryAllowsLargerPensAndMaxCatsPerPenError: null,

  addBookingData: {},

  isBookingAvailableIsLoading: false,
  isBookingAvailableResult: "",
  isBookingAvailableError: null,

  showIneligibleDates: false,

  updatePensDataIsLoading: false,
  updatePensDataResult: "",
  updatePensDataError: null,

  addBookingDataIsLoading: false,
  addBookingDataResult: "",
  addBookingDataError: null,
};

export const dbManageAddBookingSlice = createSlice({
  name: "dbManageAddBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setAddBookingData(state, action) {
      state.addBookingData = action.payload;
    },
    resetIsBookingAvailableResult(state) {
      state.isBookingAvailableResult = "";
    },
    resetIsBookingAvailableError(state) {
      state.isBookingAvailableError = null;
    },
    resetUpdatePensDataResult(state) {
      state.updatePensDataResult = "";
    },
    resetUpdatePensDataError(state) {
      state.updatePensDataError = null;
    },
    resetAddBookingDataResult(state) {
      state.addBookingDataResult = "";
    },
    resetAddBookingDataError(state) {
      state.addBookingDataError = null;
    },
    setShowIneligibleDates(state, action) {
      state.showIneligibleDates = action.payload;
    },
    resetDbManageAddBookingState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDbManageAddBookingSelectors: createSelector(
      (state) => state.catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading,
      (state) => state.catteryAllowsLargerPensBoolAndMaxCatsPerPen,
      (state) => state.catteryAllowsLargerPensAndMaxCatsPerPenResult,
      (state) => state.catteryAllowsLargerPensAndMaxCatsPerPenError,

      (state) => state.addBookingData,

      (state) => state.isBookingAvailableIsLoading,
      (state) => state.isBookingAvailableResult,
      (state) => state.isBookingAvailableError,

      (state) => state.showIneligibleDates,

      (state) => state.updatePensDataIsLoading,
      (state) => state.updatePensDataResult,
      (state) => state.updatePensDataError,

      (state) => state.addBookingDataIsLoading,
      (state) => state.addBookingDataResult,
      (state) => state.addBookingDataError,

      (
        catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading,
        catteryAllowsLargerPensBoolAndMaxCatsPerPen,
        catteryAllowsLargerPensAndMaxCatsPerPenResult,
        catteryAllowsLargerPensAndMaxCatsPerPenError,
        addBookingData,
        isBookingAvailableIsLoading,
        isBookingAvailableResult,
        isBookingAvailableError,
        showIneligibleDates,
        updatePensDataIsLoading,
        updatePensDataResult,
        updatePensDataError,
        addBookingDataIsLoading,
        addBookingDataResult,
        addBookingDataError
      ) => {
        return {
          catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading,
          catteryAllowsLargerPensBoolAndMaxCatsPerPen,
          catteryAllowsLargerPensAndMaxCatsPerPenResult,
          catteryAllowsLargerPensAndMaxCatsPerPenError,
          addBookingData,
          isBookingAvailableIsLoading,
          isBookingAvailableResult,
          isBookingAvailableError,
          showIneligibleDates,
          updatePensDataIsLoading,
          updatePensDataResult,
          updatePensDataError,
          addBookingDataIsLoading,
          addBookingDataResult,
          addBookingDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllowsLargerPensBoolAndMaxCatsPerPenAsync.pending,
        (state) => {
          state.catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading = true;
        }
      )
      .addCase(
        getAllowsLargerPensBoolAndMaxCatsPerPenAsync.fulfilled,
        (state, action) => {
          state.catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading = false;
          state.catteryAllowsLargerPensAndMaxCatsPerPenResult = "fulfilled";
          state.catteryAllowsLargerPensBoolAndMaxCatsPerPen = action.payload;
          state.catteryAllowsLargerPensAndMaxCatsPerPenError = null;
        }
      )
      .addCase(
        getAllowsLargerPensBoolAndMaxCatsPerPenAsync.rejected,
        (state, action) => {
          state.catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading = false;
          state.catteryAllowsLargerPensAndMaxCatsPerPenResult = "rejected";
          state.catteryAllowsLargerPensBoolAndMaxCatsPerPen = null;
          state.catteryAllowsLargerPensAndMaxCatsPerPenError = action.payload;
        }
      )
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
      })
      .addCase(updatePensDataAsync.pending, (state) => {
        state.updatePensDataIsLoading = true;
      })
      .addCase(updatePensDataAsync.fulfilled, (state) => {
        state.updatePensDataIsLoading = false;
        state.updatePensDataResult = "fulfilled";
        state.updatePensDataError = null;
      })
      .addCase(updatePensDataAsync.rejected, (state, action) => {
        state.updatePensDataIsLoading = false;
        state.updatePensDataResult = "rejected";
        state.updatePensDataError = action.payload;
      })
      .addCase(uploadBookingDataAsync.pending, (state) => {
        state.addBookingDataIsLoading = true;
      })
      .addCase(uploadBookingDataAsync.fulfilled, (state) => {
        state.addBookingDataIsLoading = false;
        state.addBookingDataResult = "fulfilled";
        state.addBookingDataError = null;
      })
      .addCase(uploadBookingDataAsync.rejected, (state, action) => {
        state.addBookingDataIsLoading = false;
        state.addBookingDataResult = "rejected";
        state.addBookingDataError = action.payload;
      });
  },
});

export const {
  setAddBookingData,
  resetIsBookingAvailableResult,
  resetIsBookingAvailableError,
  resetUpdatePensDataResult,
  resetUpdatePensDataError,
  resetAddBookingDataResult,
  resetAddBookingDataError,
  setShowIneligibleDates,
  resetDbManageAddBookingState,
} = dbManageAddBookingSlice.actions;
export const { selectDbManageAddBookingSelectors } =
  dbManageAddBookingSlice.selectors;

export const dbManageAddBookingReducer = dbManageAddBookingSlice.reducer;

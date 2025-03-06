import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchAvailabilityDocsToUpdateAsync,
  deleteBookingDataAsync,
} from "./cancel-booking.thunks";

const INITIAL_STATE = {
  fetchAvailabilityDocsToUpdateIsLoading: false,
  dataFromBooking: {},
  availabilityDocsToUpdate: [],
  fetchAvailabilityDocsToUpdateResult: "",
  fetchAvailabilityDocsToUpdateError: null,
  deleteBookingDataIsLoading: false,
  deleteBookingDataResult: "",
  deleteBookingDataError: null,
};

export const cancelBookingSlice = createSlice({
  name: "cancelBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setDataFromBooking(state, action) {
      state.dataFromBooking = action.payload;
    },
    resetFetchAvailabilityDocsToUpdateResult(state) {
      state.fetchAvailabilityDocsToUpdateResult = "";
    },
    resetFetchAvailabilityDocsToUpdateError(state) {
      state.fetchAvailabilityDocsToUpdateError = null;
    },
    resetDeleteBookingDataResult(state) {
      state.deleteBookingDataResult = "";
    },
    resetDeleteBookingDataError(state) {
      state.deleteBookingDataError = "";
    },
    resetCancelBookingState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailabilityDocsToUpdateAsync.pending, (state) => {
        state.fetchAvailabilityDocsToUpdateIsLoading = true;
      })
      .addCase(
        fetchAvailabilityDocsToUpdateAsync.fulfilled,
        (state, action) => {
          state.fetchAvailabilityDocsToUpdateIsLoading = false;
          state.availabilityDocsToUpdate = action.payload;
          state.fetchAvailabilityDocsToUpdateResult = "fulfilled";
          state.fetchAvailabilityDocsToUpdateError = null;
        }
      )
      .addCase(fetchAvailabilityDocsToUpdateAsync.rejected, (state, action) => {
        state.fetchAvailabilityDocsToUpdateIsLoading = false;
        state.availabilityDocsToUpdate = [];
        state.fetchAvailabilityDocsToUpdateResult = "rejected";
        state.fetchAvailabilityDocsToUpdateError = action.payload;
      })
      .addCase(deleteBookingDataAsync.pending, (state) => {
        state.deleteBookingDataIsLoading = true;
      })
      .addCase(deleteBookingDataAsync.fulfilled, (state) => {
        state.deleteBookingDataIsLoading = false;
        state.deleteBookingDataResult = "fulfilled";
        state.deleteBookingDataError = null;
      })
      .addCase(deleteBookingDataAsync.rejected, (state, action) => {
        state.deleteBookingDataIsLoading = false;
        state.deleteBookingDataResult = "rejected";
        state.deleteBookingDataError = action.payload;
      });
  },
});

export const {
  setDataFromBooking,
  resetFetchAvailabilityDocsToUpdateResult,
  resetFetchAvailabilityDocsToUpdateError,
  resetDeleteBookingDataResult,
  resetDeleteBookingDataError,
  resetCancelBookingState,
} = cancelBookingSlice.actions;

export const selectCancelBookingSelectors = createSelector(
  (state) => state.cancelBooking,
  (cancelBooking) => ({
    fetchAvailabilityDocsToUpdateIsLoading:
      cancelBooking.fetchAvailabilityDocsToUpdateIsLoading,
    dataFromBooking: cancelBooking.dataFromBooking,
    dataForAvailabilityDocsRequest:
      cancelBooking.dataForAvailabilityDocsRequest,
    availabilityDocsToUpdate: cancelBooking.availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateResult:
      cancelBooking.fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError:
      cancelBooking.fetchAvailabilityDocsToUpdateError,
    deleteBookingDataIsLoading: cancelBooking.deleteBookingDataIsLoading,
    deleteBookingDataResult: cancelBooking.deleteBookingDataResult,
    deleteBookingDataError: cancelBooking.deleteBookingDataError,
  })
);

export const cancelBookingReducer = cancelBookingSlice.reducer;

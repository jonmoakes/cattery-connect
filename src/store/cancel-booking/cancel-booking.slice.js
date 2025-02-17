import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchAvailabilityDocsToUpdateAsync } from "./cancel-booking.thunks";

const INITIAL_STATE = {
  fetchAvailabilityDocsToUpdateIsLoading: false,
  dataForAvailabilityDocsRequest: {},
  availabilityDocsToUpdate: [],
  fetchAvailabilityDocsToUpdateResult: "",
  fetchAvailabilityDocsToUpdateError: null,
};

export const cancelBookingSlice = createSlice({
  name: "cancelBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setDataForAvailabilityDocsRequest(state, action) {
      state.dataForAvailabilityDocsRequest = action.payload;
    },
    resetFetchAvailabilityDocsToUpdateResult(state) {
      state.fetchAvailabilityDocsToUpdateResult = "";
    },
    resetFetchAvailabilityDocsToUpdateError(state) {
      state.fetchAvailabilityDocsToUpdateError = null;
    },
    resetCancelBookingState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectCancelBookingSelectors: createSelector(
      (state) => state.fetchAvailabilityDocsToUpdateIsLoading,
      (state) => state.dataForAvailabilityDocsRequest,
      (state) => state.availabilityDocsToUpdate,
      (state) => state.fetchAvailabilityDocsToUpdateResult,
      (state) => state.fetchAvailabilityDocsToUpdateError,
      (
        fetchAvailabilityDocsToUpdateIsLoading,
        dataForAvailabilityDocsRequest,
        availabilityDocsToUpdate,
        fetchAvailabilityDocsToUpdateResult,
        fetchAvailabilityDocsToUpdateError
      ) => {
        return {
          fetchAvailabilityDocsToUpdateIsLoading,
          dataForAvailabilityDocsRequest,
          availabilityDocsToUpdate,
          fetchAvailabilityDocsToUpdateResult,
          fetchAvailabilityDocsToUpdateError,
        };
      }
    ),
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
      });
  },
});

export const {
  setDataForAvailabilityDocsRequest,
  resetFetchAvailabilityDocsToUpdateResult,
  resetFetchAvailabilityDocsToUpdateError,
  resetCancelBookingState,
} = cancelBookingSlice.actions;
export const { selectCancelBookingSelectors } = cancelBookingSlice.selectors;

export const cancelBookingReducer = cancelBookingSlice.reducer;

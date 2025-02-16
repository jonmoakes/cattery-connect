import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getRequiredCatteryDataForBookingAsync } from "./required-cattery-data-for-booking.thunks";

const INITIAL_STATE = {
  requiredCatteryDataIsLoading: false,
  requiredCatteryData: {},
  requiredCatteryDataResult: "",
  requiredCatteryDataError: null,
};

export const requiredCatteryDataForBookingSlice = createSlice({
  name: "requiredCatteryDataForBooking",
  initialState: INITIAL_STATE,
  reducers: {
    resetRequiredCatteryDataForBookingState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectRequiredCatteryDataForBookingSelectors: createSelector(
      (state) => state.requiredCatteryDataIsLoading,
      (state) => state.requiredCatteryData,
      (state) => state.requiredCatteryDataResult,
      (state) => state.requiredCatteryDataError,
      (
        requiredCatteryDataIsLoading,
        requiredCatteryData,
        requiredCatteryDataResult,
        requiredCatteryDataError
      ) => {
        return {
          requiredCatteryDataIsLoading,
          requiredCatteryData,
          requiredCatteryDataResult,
          requiredCatteryDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRequiredCatteryDataForBookingAsync.pending, (state) => {
        state.requiredCatteryDataIsLoading = true;
      })
      .addCase(
        getRequiredCatteryDataForBookingAsync.fulfilled,
        (state, action) => {
          state.requiredCatteryDataIsLoading = false;
          state.requiredCatteryDataResult = "fulfilled";
          state.requiredCatteryData = action.payload;
          state.requiredCatteryDataError = null;
        }
      )
      .addCase(
        getRequiredCatteryDataForBookingAsync.rejected,
        (state, action) => {
          state.requiredCatteryDataIsLoading = false;
          state.requiredCatteryDataResult = "rejected";
          state.requiredCatteryData = null;
          state.requiredCatteryDataError = action.payload;
        }
      );
  },
});

export const { resetRequiredCatteryDataForBookingState } =
  requiredCatteryDataForBookingSlice.actions;
export const { selectRequiredCatteryDataForBookingSelectors } =
  requiredCatteryDataForBookingSlice.selectors;

export const requiredDataForCatteryBookingReducer =
  requiredCatteryDataForBookingSlice.reducer;

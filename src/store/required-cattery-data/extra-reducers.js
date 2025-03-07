import { getRequiredCatteryDataForBookingAsync } from "./required-cattery-data-for-booking.thunks";

export const extraReducers = (builder) => {
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
};

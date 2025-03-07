import { checkBookingAvailabilityAsync } from "./is-booking-available.thunks";

export const extraReducers = (builder) => {
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
};

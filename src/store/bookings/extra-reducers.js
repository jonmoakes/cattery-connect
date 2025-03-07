import {
  fetchOwnerBookingsAsync,
  updateBookingPaymentStatusAsync,
} from "./bookings.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchOwnerBookingsAsync.pending, (state) => {
      state.fetchOwnerBookingsIsLoading = true;
    })
    .addCase(fetchOwnerBookingsAsync.fulfilled, (state, action) => {
      state.fetchOwnerBookingsIsLoading = false;
      state.ownerBookings = action.payload;
      state.fetchOwnerBookingsResult = "fulfilled";
      state.fetchOwnerBookingsError = null;
    })
    .addCase(fetchOwnerBookingsAsync.rejected, (state, action) => {
      state.fetchOwnerBookingsIsLoading = false;
      state.ownerBookings = [];
      state.fetchOwnerBookingsResult = "rejected";
      state.fetchOwnerBookingsError = action.payload;
    })
    .addCase(updateBookingPaymentStatusAsync.pending, (state) => {
      state.updatePaymentStatusIsLoading = true;
    })
    .addCase(updateBookingPaymentStatusAsync.fulfilled, (state) => {
      state.updatePaymentStatusIsLoading = false;
      state.updatePaymentStatusResult = "fulfilled";
      state.updatePaymentStatusError = null;
    })
    .addCase(updateBookingPaymentStatusAsync.rejected, (state, action) => {
      state.updatePaymentStatusIsLoading = false;
      state.updatePaymentStatusResult = "rejected";
      state.updatePaymentStatusError = action.payload;
    });
};

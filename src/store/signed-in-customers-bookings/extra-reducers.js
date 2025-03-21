import { fetchSignedInCustomersBookingsAsync } from "./signed-in-customers-bookings.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchSignedInCustomersBookingsAsync.pending, (state) => {
      state.signedInCustomersBookingsIsLoading = true;
    })
    .addCase(fetchSignedInCustomersBookingsAsync.fulfilled, (state, action) => {
      state.signedInCustomersBookingsIsLoading = false;
      state.signedInCustomersBookingsResult = "fulfilled";
      state.customersBookings = action.payload;
      state.signedInCustomersBookingsError = null;
    })
    .addCase(fetchSignedInCustomersBookingsAsync.rejected, (state, action) => {
      state.signedInCustomersBookingsIsLoading = false;
      state.signedInCustomersBookingsResult = "rejected";
      state.customersBookings = [];
      state.signedInCustomersBookingsError = action.payload;
    });
};

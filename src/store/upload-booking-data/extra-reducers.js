import { uploadBookingDataToDbAsync } from "./upload-booking-data.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(uploadBookingDataToDbAsync.pending, (state) => {
      state.uploadBookingDataIsLoading = true;
    })
    .addCase(uploadBookingDataToDbAsync.fulfilled, (state) => {
      state.uploadBookingDataIsLoading = false;
      state.uploadBookingDataResult = "fulfilled";
      state.uploadBookingDataError = null;
    })
    .addCase(uploadBookingDataToDbAsync.rejected, (state, action) => {
      state.uploadBookingDataIsLoading = false;
      state.uploadBookingDataResult = "rejected";
      state.uploadBookingDataError = action.payload;
    });
};

import {
  deleteBookingDataAsync,
  fetchAvailabilityDocsToUpdateAsync,
} from "./cancel-booking.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchAvailabilityDocsToUpdateAsync.pending, (state) => {
      state.fetchAvailabilityDocsToUpdateIsLoading = true;
    })
    .addCase(fetchAvailabilityDocsToUpdateAsync.fulfilled, (state, action) => {
      state.fetchAvailabilityDocsToUpdateIsLoading = false;
      state.availabilityDocsToUpdate = action.payload;
      state.fetchAvailabilityDocsToUpdateResult = "fulfilled";
      state.fetchAvailabilityDocsToUpdateError = null;
    })
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
};

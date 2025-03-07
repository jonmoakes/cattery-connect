import { createSelector } from "@reduxjs/toolkit";

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

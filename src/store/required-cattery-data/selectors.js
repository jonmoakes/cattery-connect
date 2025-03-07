import { createSelector } from "@reduxjs/toolkit";

export const selectRequiredCatteryDataForBookingSelectors = createSelector(
  (state) => state.requiredCatteryDataForBooking,
  (requiredCatteryDataForBooking) => ({
    requiredCatteryDataIsLoading:
      requiredCatteryDataForBooking.requiredCatteryDataIsLoading,
    requiredCatteryData: requiredCatteryDataForBooking.requiredCatteryData,
    requiredCatteryDataResult:
      requiredCatteryDataForBooking.requiredCatteryDataResult,
    requiredCatteryDataError:
      requiredCatteryDataForBooking.requiredCatteryDataError,
  })
);

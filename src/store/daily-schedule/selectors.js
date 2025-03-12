import { createSelector } from "@reduxjs/toolkit";

export const selectDailyScheduleSelectors = createSelector(
  (state) => state.dailySchedule,
  (dailySchedule) => ({
    dailyScheduleIsLoading: dailySchedule.dailyScheduleIsLoading,
    dailyBookingsData: dailySchedule.dailyBookingsData,
    dailyBookingsDataResult: dailySchedule.dailyBookingsDataResult,
    dailyBookingsDataError: dailySchedule.dailyBookingsDataError,
    updateCheckInOutStatusIsLoading:
      dailySchedule.updateCheckInOutStatusIsLoading,
    updateCheckInOutStatusResult: dailySchedule.updateCheckInOutStatusResult,
    updateCheckInOutStatusError: dailySchedule.updateCheckInOutStatusError,
  })
);

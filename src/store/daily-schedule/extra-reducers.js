import {
  getDailyBookingsDataAsync,
  updateHasCheckedInOrOutInDbAsync,
} from "./daily-schedule.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getDailyBookingsDataAsync.pending, (state) => {
      state.dailyScheduleIsLoading = true;
    })
    .addCase(getDailyBookingsDataAsync.fulfilled, (state, action) => {
      state.dailyScheduleIsLoading = false;
      state.dailyBookingsDataResult = "fulfilled";
      state.dailyBookingsData = action.payload;
      state.dailyBookingsDataError = null;
    })
    .addCase(getDailyBookingsDataAsync.rejected, (state, action) => {
      state.dailyScheduleIsLoading = false;
      state.dailyBookingsDataResult = "rejected";
      state.dailyBookingsData = [];
      state.dailyBookingsDataError = action.payload;
    });
  builder
    .addCase(updateHasCheckedInOrOutInDbAsync.pending, (state) => {
      state.updateCheckInOutStatusIsLoading = true;
    })
    .addCase(updateHasCheckedInOrOutInDbAsync.fulfilled, (state) => {
      state.updateCheckInOutStatusIsLoading = false;
      state.updateCheckInOutStatusResult = "fulfilled";
      state.updateCheckInOutStatusError = null;
    })
    .addCase(updateHasCheckedInOrOutInDbAsync.rejected, (state, action) => {
      state.updateCheckInOutStatusIsLoading = false;
      state.updateCheckInOutStatusResult = "rejected";
      state.updateCheckInOutStatusError = action.payload;
    });
};

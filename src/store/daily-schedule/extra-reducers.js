import { getDailyBookingsDataAsync } from "./daily-schedule.thunks";

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
};

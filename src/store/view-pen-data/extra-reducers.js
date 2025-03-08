import { fetchChosenDaysPenDataAsync } from "./view-pen-data.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(fetchChosenDaysPenDataAsync.pending, (state) => {
      state.chosenDatePenDataIsLoading = true;
    })
    .addCase(fetchChosenDaysPenDataAsync.fulfilled, (state, action) => {
      state.chosenDatePenDataIsLoading = false;
      state.chosenDatePenDataResult = "fulfilled";
      state.chosenDatePenData = action.payload;
      state.chosenDatePenDataError = null;
    })
    .addCase(fetchChosenDaysPenDataAsync.rejected, (state, action) => {
      state.chosenDatePenDataIsLoading = false;
      state.chosenDatePenDataResult = "rejected";
      state.chosenDatePenData = {};
      state.chosenDatePenDataError = action.payload;
    });
};

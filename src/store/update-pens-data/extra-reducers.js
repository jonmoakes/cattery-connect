import { updatePensDataInDbAsync } from "./update-pens-data.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(updatePensDataInDbAsync.pending, (state) => {
      state.updatePensDataIsLoading = true;
    })
    .addCase(updatePensDataInDbAsync.fulfilled, (state) => {
      state.updatePensDataIsLoading = false;
      state.updatePensDataResult = "fulfilled";
      state.updatePensDataError = null;
    })
    .addCase(updatePensDataInDbAsync.rejected, (state, action) => {
      state.updatePensDataIsLoading = false;
      state.updatePensDataResult = "rejected";
      state.updatePensDataError = action.payload;
    });
};

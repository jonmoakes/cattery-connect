import { uploadDatesAndPensAvailabilityDocumentAsync } from "./upload-dates-and-pens-data.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(uploadDatesAndPensAvailabilityDocumentAsync.pending, (state) => {
      state.uploadDatesAndPensDataIsLoading = true;
    })
    .addCase(uploadDatesAndPensAvailabilityDocumentAsync.fulfilled, (state) => {
      state.uploadDatesAndPensDataIsLoading = false;
      state.uploadDatesAndPensDataResult = "fulfilled";
      state.uploadDatesAndPensDataError = null;
    })
    .addCase(
      uploadDatesAndPensAvailabilityDocumentAsync.rejected,
      (state, action) => {
        state.uploadDatesAndPensDataIsLoading = false;
        state.uploadDatesAndPensDataResult = "rejected";
        state.uploadDatesAndPensDataError = action.payload;
      }
    );
};

import { getCatteryDetailsAsync } from "./cattery-details-thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getCatteryDetailsAsync.pending, (state) => {
      state.catteryDetailsIsLoading = true;
    })
    .addCase(getCatteryDetailsAsync.fulfilled, (state, action) => {
      state.catteryDetailsIsLoading = false;
      state.catteryDetailsResult = "fulfilled";
      state.catteryDetails = action.payload;
      state.catteryDetailsError = null;
    })
    .addCase(getCatteryDetailsAsync.rejected, (state, action) => {
      state.catteryDetailsIsLoading = false;
      state.catteryDetailsResult = "rejected";
      state.catteryDetails = {};
      state.catteryDetailsError = action.payload;
    });
};

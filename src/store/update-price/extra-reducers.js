import { updatePricePerNightAsync } from "./update-price-thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(updatePricePerNightAsync.pending, (state) => {
      state.updatePriceIsLoading = true;
    })
    .addCase(updatePricePerNightAsync.fulfilled, (state) => {
      state.updatePriceIsLoading = false;
      state.updatePriceResult = "fulfilled";
      state.updatePriceError = null;
    })
    .addCase(updatePricePerNightAsync.rejected, (state, action) => {
      state.updatePriceIsLoading = false;
      state.updatePriceResult = "rejected";
      state.updatePriceError = action.payload;
    });
};

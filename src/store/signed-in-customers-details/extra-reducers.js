import { getSignedInCustomersDetailsAsync } from "./signed-in-customer-details.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getSignedInCustomersDetailsAsync.pending, (state) => {
      state.signedInCustomersDetailsIsLoading = true;
    })
    .addCase(getSignedInCustomersDetailsAsync.fulfilled, (state, action) => {
      state.signedInCustomersDetailsIsLoading = false;
      state.signedInCustomersDetailsResult = "fulfilled";
      state.signedInCustomersDetails = action.payload;
      state.signedInCustomersDetailsError = null;
    })
    .addCase(getSignedInCustomersDetailsAsync.rejected, (state, action) => {
      state.signedInCustomersDetailsIsLoading = false;
      state.signedInCustomersDetailsResult = "rejected";
      state.signedInCustomersDetails = {};
      state.signedInCustomersDetailsError = action.payload;
    });
};

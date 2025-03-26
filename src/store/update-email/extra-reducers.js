import { updateEmailAsync } from "./update-email.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(updateEmailAsync.pending, (state) => {
      state.updateEmailIsLoading = true;
    })
    .addCase(updateEmailAsync.fulfilled, (state) => {
      state.updateEmailIsLoading = false;
      state.updateEmailResult = "fulfilled";
      state.updateEmailDetails = {};
      state.updateEmailError = null;
    })
    .addCase(updateEmailAsync.rejected, (state, action) => {
      state.updateEmailIsLoading = false;
      state.updateEmailResult = "rejected";
      state.updateEmailError = action.payload;
    });
};

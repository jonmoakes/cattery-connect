import { getChooseNewPasswordResultAsync } from "./choose-new-password.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getChooseNewPasswordResultAsync.pending, (state) => {
      state.newPasswordResultIsLoading = true;
    })
    .addCase(getChooseNewPasswordResultAsync.fulfilled, (state) => {
      state.newPasswordResultIsLoading = false;
      state.newPasswordError = null;
      state.newPasswordResult = "success";
    })
    .addCase(getChooseNewPasswordResultAsync.rejected, (state, action) => {
      state.newPasswordResultIsLoading = false;
      state.newPasswordError = action.payload;
      state.newPasswordResult = "";
    });
};

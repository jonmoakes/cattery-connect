import { generateNewPasswordRequestAsync } from "./generate-new-password-request.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(generateNewPasswordRequestAsync.pending, (state) => {
      state.generateNewPasswordRequestIsLoading = true;
    })
    .addCase(generateNewPasswordRequestAsync.fulfilled, (state) => {
      state.generateNewPasswordRequestIsLoading = false;
      state.generateNewPasswordRequestResult = "success";
      state.generateNewPasswordRequestError = null;
    })
    .addCase(generateNewPasswordRequestAsync.rejected, (state, action) => {
      state.generateNewPasswordRequestIsLoading = false;
      state.generateNewPasswordRequestResult = "";
      state.generateNewPasswordRequestError = action.payload;
    });
};

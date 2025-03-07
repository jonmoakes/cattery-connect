import { createSelector } from "@reduxjs/toolkit";

export const selectGenerateNewPasswordRequestSelectors = createSelector(
  (state) => state.generateNewPasswordRequest,
  (generateNewPasswordRequest) => ({
    generateNewPasswordRequestEmail:
      generateNewPasswordRequest.generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading:
      generateNewPasswordRequest.generateNewPasswordRequestIsLoading,
    generateNewPasswordRequestResult:
      generateNewPasswordRequest.generateNewPasswordRequestResult,
    generateNewPasswordRequestError:
      generateNewPasswordRequest.generateNewPasswordRequestError,
  })
);

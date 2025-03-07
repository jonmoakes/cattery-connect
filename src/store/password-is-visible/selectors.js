import { createSelector } from "@reduxjs/toolkit";

export const selectPasswordIsVisibleSelectors = createSelector(
  (state) => state.passwordIsVisible,
  (passwordIsVisible) => ({
    signInPasswordIsVisible: passwordIsVisible.signInPasswordIsVisible,
    resetPasswordIsVisible: passwordIsVisible.resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible:
      passwordIsVisible.resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible:
      passwordIsVisible.updateEmailPasswordIsVisible,
  })
);

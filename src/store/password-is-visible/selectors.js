import { createSelector } from "@reduxjs/toolkit";

export const selectPasswordIsVisibleSelectors = createSelector(
  (state) => state.passwordIsVisible,
  (passwordIsVisible) => ({
    signInPasswordIsVisible: passwordIsVisible.signInPasswordIsVisible,
    signUpPasswordIsVisible: passwordIsVisible.signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible:
      passwordIsVisible.signUpConfirmPasswordIsVisible,
    resetPasswordIsVisible: passwordIsVisible.resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible:
      passwordIsVisible.resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible:
      passwordIsVisible.updateEmailPasswordIsVisible,
  })
);

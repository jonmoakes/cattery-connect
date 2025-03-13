import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "./initial-state";

export const passwordIsVisibleSlice = createSlice({
  name: "passwordIsVisible",
  initialState: INITIAL_STATE,
  reducers: {
    toggleSignInPasswordIsVisible(state) {
      state.signInPasswordIsVisible = !state.signInPasswordIsVisible;
    },
    hideSignInPasswordIsVisible(state) {
      state.signInPasswordIsVisible = false;
    },
    toggleSignUpPasswordIsVisible(state) {
      state.signUpPasswordIsVisible = !state.signUpPasswordIsVisible;
    },
    toggleSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible =
        !state.signUpConfirmPasswordIsVisible;
    },
    hideSignUpPasswordIsVisible(state) {
      state.signUpPasswordIsVisible = false;
    },
    hideSignUpConfirmPasswordIsVisible(state) {
      state.signUpConfirmPasswordIsVisible = false;
    },
    toggleResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = !state.resetPasswordIsVisible;
    },
    toggleResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible =
        !state.resetPasswordConfirmPasswordIsVisible;
    },
    hideResetPasswordIsVisible(state) {
      state.resetPasswordIsVisible = false;
    },
    hideResetPasswordConfirmPasswordIsVisible(state) {
      state.resetPasswordConfirmPasswordIsVisible = false;
    },
    toggleUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = !state.updateEmailPasswordIsVisible;
    },
    hideUpdateEmailPasswordIsVisible(state) {
      state.updateEmailPasswordIsVisible = false;
    },
    resetPasswordIsVisibleState: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  toggleSignInPasswordIsVisible,
  hideSignInPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  hideSignUpConfirmPasswordIsVisible,
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  toggleUpdateEmailPasswordIsVisible,
  hideUpdateEmailPasswordIsVisible,
  resetPasswordIsVisibleState,
} = passwordIsVisibleSlice.actions;

export const passwordIsVisibleReducer = passwordIsVisibleSlice.reducer;

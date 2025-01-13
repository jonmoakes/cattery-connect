import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signInPasswordIsVisible: false,
  resetPasswordIsVisible: false,
  resetPasswordConfirmPasswordIsVisible: false,
  updateEmailPasswordIsVisible: false,
};

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
  selectors: {
    selectPasswordIsVisibleSelectors: createSelector(
      (state) => state.signInPasswordIsVisible,
      (state) => state.resetPasswordIsVisible,
      (state) => state.resetPasswordConfirmPasswordIsVisible,
      (state) => state.updateEmailPasswordIsVisible,
      (
        signInPasswordIsVisible,
        resetPasswordIsVisible,
        resetPasswordConfirmPasswordIsVisible,
        updateEmailPasswordIsVisible
      ) => {
        return {
          signInPasswordIsVisible,
          resetPasswordIsVisible,
          resetPasswordConfirmPasswordIsVisible,
          updateEmailPasswordIsVisible,
        };
      }
    ),
  },
});

export const {
  toggleSignInPasswordIsVisible,
  hideSignInPasswordIsVisible,
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  toggleUpdateEmailPasswordIsVisible,
  hideUpdateEmailPasswordIsVisible,
  resetPasswordIsVisibleState,
} = passwordIsVisibleSlice.actions;

export const passwordIsVisibleReducer = passwordIsVisibleSlice.reducer;
export const { selectPasswordIsVisibleSelectors } =
  passwordIsVisibleSlice.selectors;

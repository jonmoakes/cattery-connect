import { createSelector, createSlice } from "@reduxjs/toolkit";

import { getUserOnLoadAsync, signInAsync, signOutAsync } from "./user.thunks";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCurrentUserErrorMessage(state) {
      state.currentUserError = null;
    },
  },
  selectors: {
    selectCurrentUserSelectors: createSelector(
      (state) => state.currentUser,
      (state) => state.currentUserIsLoading,
      (state) => state.currentUserError,
      (state) => state.emailOtpUserId,
      (currentUser, currentUserIsLoading, currentUserError) => {
        return {
          currentUser,
          currentUserIsLoading,
          currentUserError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = action.payload;
      })
      .addCase(signInAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = null;
        state.emailOtpUserId = "";
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      });
  },
});

export const { resetCurrentUserErrorMessage } = userSlice.actions;
export const { selectCurrentUserSelectors } = userSlice.selectors;

export const userReducer = userSlice.reducer;

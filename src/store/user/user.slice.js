import { createSelector, createSlice } from "@reduxjs/toolkit";

import { getUserOnLoadAsync, signInAsync, signOutAsync } from "./user.thunks";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
  signOutIsLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCurrentUserErrorMessage(state) {
      state.currentUserError = null;
    },
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
        state.signOutIsLoading = true;
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.signOutIsLoading = false;
        state.currentUser = null;
        state.currentUserError = null;
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.signOutIsLoading = false;
        state.currentUserError = action.payload;
      });
  },
});

export const { resetCurrentUserErrorMessage } = userSlice.actions;

export const selectCurrentUserSelectors = createSelector(
  (state) => state.user,
  (user) => ({
    currentUserIsLoading: user.currentUserIsLoading,
    currentUser: user.currentUser,
    currentUserError: user.currentUserError,
    signOutIsLoading: user.signOutIsLoading,
  })
);

export const userReducer = userSlice.reducer;

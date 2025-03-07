import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentUserSelectors = createSelector(
  (state) => state.user,
  (user) => ({
    currentUserIsLoading: user.currentUserIsLoading,
    currentUser: user.currentUser,
    currentUserError: user.currentUserError,
    signOutIsLoading: user.signOutIsLoading,
  })
);

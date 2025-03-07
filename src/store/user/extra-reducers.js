import { getUserOnLoadAsync, signInAsync, signOutAsync } from "./user.thunks";

export const extraReducers = (builder) => {
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
};

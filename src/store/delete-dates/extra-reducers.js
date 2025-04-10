import {
  getDateDocumentsToDeleteAsync,
  deleteDateDocumentsAsync,
} from "./delete-dates-thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(getDateDocumentsToDeleteAsync.pending, (state) => {
      state.getDateDocumentsToDeleteIsLoading = true;
    })
    .addCase(getDateDocumentsToDeleteAsync.fulfilled, (state, action) => {
      state.getDateDocumentsToDeleteIsLoading = false;
      state.getDateDocumentsToDeleteResult = "fulfilled";
      state.getDateDocumentsToDeleteError = null;
      state.dateDocumentsToDelete = action.payload;
    })
    .addCase(getDateDocumentsToDeleteAsync.rejected, (state, action) => {
      state.getDateDocumentsToDeleteIsLoading = false;
      state.getDateDocumentsToDeleteResult = "rejected";
      state.getDateDocumentsToDeleteError = action.payload;
      state.dateDocumentsToDelete = [];
    })
    .addCase(deleteDateDocumentsAsync.pending, (state) => {
      state.deleteDateDocumentsIsLoading = true;
    })
    .addCase(deleteDateDocumentsAsync.fulfilled, (state) => {
      state.deleteDateDocumentsIsLoading = false;
      state.deleteDateDocumentsResult = "fulfilled";
      state.deleteDateDocumentsError = null;
    })
    .addCase(deleteDateDocumentsAsync.rejected, (state, action) => {
      state.deleteDateDocumentsIsLoading = false;
      state.deleteDateDocumentsResult = "rejected";
      state.deleteDateDocumentsError = action.payload;
    });
};

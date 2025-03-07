import {
  addCatAsync,
  deleteCatAsync,
  editCatAsync,
} from "./cat-details-management.thunks";

export const extraReducers = (builder) => {
  builder
    .addCase(addCatAsync.pending, (state) => {
      state.catDetailManagementIsLoading = true;
    })
    .addCase(addCatAsync.fulfilled, (state) => {
      state.catDetailManagementIsLoading = false;
      state.catDetailsManagementResult = "fulfilled";
      state.catDetailsManagementError = null;
    })
    .addCase(addCatAsync.rejected, (state, action) => {
      state.catDetailManagementIsLoading = false;
      state.catDetailsManagementResult = "rejected";
      state.catDetailsManagementError = action.payload;
    })
    .addCase(editCatAsync.pending, (state) => {
      state.catDetailManagementIsLoading = true;
    })
    .addCase(editCatAsync.fulfilled, (state) => {
      state.catDetailManagementIsLoading = false;
      state.catDetailsManagementResult = "fulfilled";
      state.catDetailsManagementError = null;
    })
    .addCase(editCatAsync.rejected, (state, action) => {
      state.catDetailManagementIsLoading = false;
      state.catDetailsManagementResult = "rejected";
      state.catDetailsManagementError = action.payload;
    })
    .addCase(deleteCatAsync.pending, (state) => {
      state.catDetailManagementIsLoading = true;
    })
    .addCase(deleteCatAsync.fulfilled, (state) => {
      state.catDetailManagementIsLoading = false;
      state.deleteCatResult = "fulfilled";
      state.deleteCatError = null;
    })
    .addCase(deleteCatAsync.rejected, (state, action) => {
      state.catDetailManagementIsLoading = false;
      state.deleteCatResult = "rejected";
      state.deleteCatError = action.payload;
    });
};

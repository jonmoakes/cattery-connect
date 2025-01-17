import { createSelector, createSlice } from "@reduxjs/toolkit";
import { deleteCatFromDbAsync } from "./delete-cat.thunks";

const INITIAL_STATE = {
  deleteCatIsLoading: false,
  deleteCatResult: "",
  deleteCatError: null,
};

export const deleteCatSlice = createSlice({
  name: "deleteCat",
  initialState: INITIAL_STATE,
  reducers: {
    resetDeleteCatState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCatFromDbAsync.pending, (state) => {
        state.deleteCatIsLoading = true;
      })
      .addCase(deleteCatFromDbAsync.fulfilled, (state) => {
        state.deleteCatIsLoading = false;
        state.deleteCatResult = "fulfilled";
        state.deleteCatError = null;
      })
      .addCase(deleteCatFromDbAsync.rejected, (state, action) => {
        state.deleteCatIsLoading = false;
        state.deleteCatResult = "rejected";
        state.deleteCatError = action.payload;
      });
  },
  selectors: {
    selectDeleteCatSelectors: createSelector(
      (state) => state.deleteCatIsLoading,
      (state) => state.deleteCatResult,
      (state) => state.deleteCatError,
      (deleteCatIsLoading, deleteCatResult, deleteCatError) => {
        return {
          deleteCatIsLoading,
          deleteCatResult,
          deleteCatError,
        };
      }
    ),
  },
});

export const { resetDeleteCatState } = deleteCatSlice.actions;
export const { selectDeleteCatSelectors } = deleteCatSlice.selectors;

export const deleteCatReducer = deleteCatSlice.reducer;

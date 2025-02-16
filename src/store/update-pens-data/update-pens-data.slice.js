import { createSelector, createSlice } from "@reduxjs/toolkit";
import { updatePensDataInDbAsync } from "./update-pens-data.thunks";

const INITIAL_STATE = {
  updatePensDataIsLoading: false,
  updatePensDataResult: "",
  updatePensDataError: null,
};

export const updatePensDataSlice = createSlice({
  name: "updatePensData",
  initialState: INITIAL_STATE,
  reducers: {
    resetUpdatePensDataResult(state) {
      state.updatePensDataResult = "";
    },
    resetUpdatePensDataError(state) {
      state.updatePensDataError = null;
    },
    resetUpdatePensDataState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectUpdatePensDataSelectors: createSelector(
      (state) => state.updatePensDataIsLoading,
      (state) => state.updatePensDataResult,
      (state) => state.updatePensDataError,
      (updatePensDataIsLoading, updatePensDataResult, updatePensDataError) => {
        return {
          updatePensDataIsLoading,
          updatePensDataResult,
          updatePensDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePensDataInDbAsync.pending, (state) => {
        state.updatePensDataIsLoading = true;
      })
      .addCase(updatePensDataInDbAsync.fulfilled, (state) => {
        state.updatePensDataIsLoading = false;
        state.updatePensDataResult = "fulfilled";
        state.updatePensDataError = null;
      })
      .addCase(updatePensDataInDbAsync.rejected, (state, action) => {
        state.updatePensDataIsLoading = false;
        state.updatePensDataResult = "rejected";
        state.updatePensDataError = action.payload;
      });
  },
});

export const {
  resetUpdatePensDataResult,
  resetUpdatePensDataError,
  resetUpdatePensDataState,
} = updatePensDataSlice.actions;
export const { selectUpdatePensDataSelectors } = updatePensDataSlice.selectors;

export const updatePensDataReducer = updatePensDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { UPDATE_PENS_DATA_INITIAL_STATE } from "./update-pens-data-initial-state";
import { updatePensDataExtraReducers } from "./update-pens-data-extra-reducers";

export const updatePensDataSlice = createSlice({
  name: "updatePensData",
  initialState: UPDATE_PENS_DATA_INITIAL_STATE,
  reducers: {
    resetUpdatePensDataResult(state) {
      state.updatePensDataResult = "";
    },
    resetUpdatePensDataError(state) {
      state.updatePensDataError = null;
    },
    resetUpdatePensDataState: () => {
      return UPDATE_PENS_DATA_INITIAL_STATE;
    },
  },
  extraReducers: updatePensDataExtraReducers,
});

export const {
  resetUpdatePensDataResult,
  resetUpdatePensDataError,
  resetUpdatePensDataState,
} = updatePensDataSlice.actions;

export const updatePensDataReducer = updatePensDataSlice.reducer;

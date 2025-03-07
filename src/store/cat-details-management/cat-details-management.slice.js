import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const catDetailsManagementSlice = createSlice({
  name: "catDetailsManagement",
  initialState: INITIAL_STATE,
  reducers: {
    setDetailsRequiredForCatManagement(state, action) {
      state.detailsRequiredForCatManagement = action.payload;
    },
    resetDetailsRequiredForCatManagement(state) {
      state.detailsRequiredForCatManagement = {};
    },
    setCatDetails(state, action) {
      state.catDetails = action.payload;
    },
    resetCatDetails(state) {
      state.catDetails = {};
    },
    setCatDetailForFormComparison(state, action) {
      state.catDetailsForFormComparison = action.payload;
    },
    resetCatDetailForFormComparison(state) {
      state.catDetailsForFormComparison = {};
    },
    resetCatDetailsManagementResult(state) {
      state.catDetailsManagementResult = "";
    },
    resetCatDetailsManagementError(state) {
      state.catDetailsManagementError = null;
    },
    resetDeleteCatResult(state) {
      state.deleteCatResult = "";
    },
    resetDeleteCatError(state) {
      state.deleteCatError = null;
    },
    resetCatDetailsManagementState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setDetailsRequiredForCatManagement,
  resetDetailsRequiredForCatManagement,
  setCatDetails,
  resetCatDetails,
  setCatDetailForFormComparison,
  resetCatDetailForFormComparison,
  resetCatDetailsManagementResult,
  resetCatDetailsManagementError,
  resetDeleteCatResult,
  resetDeleteCatError,
  resetCatDetailsManagementState,
} = catDetailsManagementSlice.actions;

export const catDetailsManagementReducer = catDetailsManagementSlice.reducer;

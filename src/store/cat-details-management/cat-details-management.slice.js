import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addCatAsync,
  editCatAsync,
  deleteCatAsync,
} from "./cat-details-management.thunks";

const defaultCatDetails = {
  catsName: "",
  catsBreed: "",
  catsAge: "",
  catsGender: "",
  catsMedicalInfo: "",
  vaccinationStatus: "",
  catsFeedingInfo: "",
  catsBehaviourInfo: "",
};

const INITIAL_STATE = {
  detailsRequiredForCatManagement: {},
  catDetailManagementIsLoading: false,
  catDetails: defaultCatDetails,
  catDetailsForFormComparison: {},
  catDetailsManagementResult: "",
  catDetailsManagementError: null,
  deleteCatResult: "",
  deleteCatError: "",
};

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
      state.catDetails = defaultCatDetails;
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
  extraReducers: (builder) => {
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
  },
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

export const selectCatDetailsManagementSelectors = createSelector(
  (state) => state.catDetailsManagement,
  (catDetailsManagement) => ({
    detailsRequiredForCatManagement:
      catDetailsManagement.detailsRequiredForCatManagement,
    catDetailManagementIsLoading:
      catDetailsManagement.catDetailManagementIsLoading,
    catDetails: catDetailsManagement.catDetails,
    catDetailsForFormComparison:
      catDetailsManagement.catDetailsForFormComparison,
    catDetailsManagementResult: catDetailsManagement.catDetailsManagementResult,
    catDetailsManagementError: catDetailsManagement.catDetailsManagementError,
    deleteCatResult: catDetailsManagement.deleteCatResult,
    deleteCatError: catDetailsManagement.deleteCatError,
  })
);

export const catDetailsManagementReducer = catDetailsManagementSlice.reducer;

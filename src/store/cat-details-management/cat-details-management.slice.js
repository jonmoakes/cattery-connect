import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  uploadCatToDbAsync,
  deleteCatFromDbAsync,
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
      .addCase(uploadCatToDbAsync.pending, (state) => {
        state.catDetailManagementIsLoading = true;
      })
      .addCase(uploadCatToDbAsync.fulfilled, (state) => {
        state.catDetailManagementIsLoading = false;
        state.catDetailsManagementResult = "fulfilled";
        state.catDetailsManagementError = null;
      })
      .addCase(uploadCatToDbAsync.rejected, (state, action) => {
        state.catDetailManagementIsLoading = false;
        state.catDetailsManagementResult = "rejected";
        state.catDetailsManagementError = action.payload;
      })
      .addCase(deleteCatFromDbAsync.pending, (state) => {
        state.catDetailManagementIsLoading = true;
      })
      .addCase(deleteCatFromDbAsync.fulfilled, (state) => {
        state.catDetailManagementIsLoading = false;
        state.deleteCatResult = "fulfilled";
        state.deleteCatError = null;
      })
      .addCase(deleteCatFromDbAsync.rejected, (state, action) => {
        state.catDetailManagementIsLoading = false;
        state.deleteCatResult = "rejected";
        state.deleteCatError = action.payload;
      });
  },
  selectors: {
    selectCatDetailsManagementSelectors: createSelector(
      (state) => state.detailsRequiredForCatManagement,
      (state) => state.catDetailManagementIsLoading,
      (state) => state.catDetails,
      (state) => state.catDetailsForFormComparison,
      (state) => state.catDetailsManagementResult,
      (state) => state.catDetailsManagementResult,
      (state) => state.deleteCatResult,
      (state) => state.deleteCatError,
      (
        detailsRequiredForCatManagement,
        catDetailManagementIsLoading,
        catDetails,
        catDetailsForFormComparison,
        catDetailsManagementResult,
        catDetailsManagementError,
        deleteCatResult,
        deleteCatError
      ) => {
        return {
          detailsRequiredForCatManagement,
          catDetailManagementIsLoading,
          catDetails,
          catDetailsForFormComparison,
          catDetailsManagementResult,
          catDetailsManagementError,
          deleteCatResult,
          deleteCatError,
        };
      }
    ),
  },
});

export const {
  setDetailsRequiredForCatManagement,
  resetDetailsRequiredForCatManagement,
  setCatDetails,
  resetCatDetails,
  setCatDetailForFormComparison,
  resetCatDetailsManagementResult,
  resetCatDetailsManagementError,
  resetDeleteCatResult,
  resetDeleteCatError,
  resetCatDetailsManagementState,
} = catDetailsManagementSlice.actions;
export const { selectCatDetailsManagementSelectors } =
  catDetailsManagementSlice.selectors;

export const catDetailsManagementReducer = catDetailsManagementSlice.reducer;

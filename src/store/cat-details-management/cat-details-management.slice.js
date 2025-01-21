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
  catDetailsManagementResult: "",
  catDetailsManagementError: null,
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
    resetCatDetailsManagementResult(state) {
      state.catDetailsManagementResult = "";
    },
    resetCatDetailsManagementError(state) {
      state.catDetailsManagementError = null;
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
        state.catDetailsManagementResult = "fulfilled";
        state.catDetailsManagementError = null;
      })
      .addCase(deleteCatFromDbAsync.rejected, (state, action) => {
        state.catDetailManagementIsLoading = false;
        state.catDetailsManagementResult = "rejected";
        state.catDetailsManagementError = action.payload;
      });
  },
  selectors: {
    selectCatDetailsManagementSelectors: createSelector(
      (state) => state.detailsRequiredForCatManagement,
      (state) => state.catDetailManagementIsLoading,
      (state) => state.catDetails,
      (state) => state.catDetailsManagementResult,
      (state) => state.catDetailsManagementResult,
      (
        detailsRequiredForCatManagement,
        catDetailManagementIsLoading,
        catDetails,
        catDetailsManagementResult,
        catDetailsManagementError
      ) => {
        return {
          detailsRequiredForCatManagement,
          catDetailManagementIsLoading,
          catDetails,
          catDetailsManagementResult,
          catDetailsManagementError,
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
  resetCatDetailsManagementResult,
  resetCatDetailsManagementError,
  resetCatDetailsManagementState,
} = catDetailsManagementSlice.actions;
export const { selectCatDetailsManagementSelectors } =
  catDetailsManagementSlice.selectors;

export const catDetailsManagementReducer = catDetailsManagementSlice.reducer;

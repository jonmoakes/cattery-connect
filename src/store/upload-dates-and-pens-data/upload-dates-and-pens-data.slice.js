import { createSelector, createSlice } from "@reduxjs/toolkit";
import { uploadDatesAndPensAsync } from "./upload-dates-and-pens-data.thunks";

const defaultDatesAndPensData = {
  documentId: "",
  year: "",
  numberofAmPensAvailable: "",
  numberofPmPensAvailable: "",
};

const INITIAL_STATE = {
  uploadDatesAndPensDataIsLoading: false,
  datesAndPensData: defaultDatesAndPensData,
  uploadDatesAndPensDataResult: "",
  uploadDatesAndPensDataError: null,
};

export const uploadDatesAndPensDataSlice = createSlice({
  name: "uploadDatesAndPensData",
  initialState: INITIAL_STATE,
  reducers: {
    setDateAndPensData(state, action) {
      state.datesAndPensData = action.payload;
    },
    resetUploadDatesAndPensDataResult(state) {
      state.uploadDatesAndPensDataResult = "";
    },
    resetUploadDatesAndPensDataError(state) {
      state.uploadDatesAndPensDataError = null;
    },
    resetUploadDatesAndPensDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDatesAndPensAsync.pending, (state) => {
        state.uploadDatesAndPensDataIsLoading = true;
      })
      .addCase(uploadDatesAndPensAsync.fulfilled, (state) => {
        state.uploadDatesAndPensDataIsLoading = false;
        state.uploadDatesAndPensDataResult = "fulfilled";
        state.uploadDatesAndPensDataError = null;
      })
      .addCase(uploadDatesAndPensAsync.rejected, (state, action) => {
        state.uploadDatesAndPensDataIsLoading = false;
        state.uploadDatesAndPensDataResult = "rejected";
        state.uploadDatesAndPensDataError = action.payload;
      });
  },
  selectors: {
    selectUploadDatesAndPensDataSelectors: createSelector(
      (state) => state.uploadDatesAndPensDataIsLoading,
      (state) => state.datesAndPensData,
      (state) => state.uploadDatesAndPensDataResult,
      (state) => state.uploadDatesAndPensDataError,
      (
        uploadDatesAndPensDataIsLoading,
        datesAndPensData,
        uploadDatesAndPensDataResult,
        uploadDatesAndPensDataError
      ) => {
        return {
          uploadDatesAndPensDataIsLoading,
          datesAndPensData,
          uploadDatesAndPensDataResult,
          uploadDatesAndPensDataError,
        };
      }
    ),
  },
});

export const {
  setDateAndPensData,
  resetUploadDatesAndPensDataResult,
  resetUploadDatesAndPensDataError,
  resetUploadDatesAndPensDataState,
} = uploadDatesAndPensDataSlice.actions;
export const { selectUploadDatesAndPensDataSelectors } =
  uploadDatesAndPensDataSlice.selectors;

export const uploadDatesAndPensDataReducer =
  uploadDatesAndPensDataSlice.reducer;

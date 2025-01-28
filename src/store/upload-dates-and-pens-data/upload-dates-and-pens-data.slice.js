import { createSelector, createSlice } from "@reduxjs/toolkit";
import { uploadDatesAndPensAvailabilityDocumentAsync } from "./upload-dates-and-pens-data.thunks";

const INITIAL_STATE = {
  uploadDatesAndPensDataIsLoading: false,
  datesAndPensData: {},
  datesIncludeDaysClosed: "",
  dateClosedToAdd: "",
  datesClosedArray: [],
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
    resetDateAndPensData(state) {
      state.datesAndPensData = {};
    },
    setDatesIncludeDatesClosed(state, action) {
      state.datesIncludeDaysClosed = action.payload;
    },
    resetDatesIncludeDatesClosed(state) {
      state.datesIncludeDaysClosed = "";
    },
    setDateClosedToAdd(state, action) {
      state.dateClosedToAdd = action.payload;
    },
    resetDateClosedToAdd(state) {
      state.dateClosedToAdd = "";
    },
    setDatesClosedArray(state, action) {
      state.datesClosedArray = action.payload;
    },
    resetDatesClosedArray(state) {
      state.datesClosedArray = [];
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
      .addCase(uploadDatesAndPensAvailabilityDocumentAsync.pending, (state) => {
        state.uploadDatesAndPensDataIsLoading = true;
      })
      .addCase(
        uploadDatesAndPensAvailabilityDocumentAsync.fulfilled,
        (state) => {
          state.uploadDatesAndPensDataIsLoading = false;
          state.uploadDatesAndPensDataResult = "fulfilled";
          state.uploadDatesAndPensDataError = null;
        }
      )
      .addCase(
        uploadDatesAndPensAvailabilityDocumentAsync.rejected,
        (state, action) => {
          state.uploadDatesAndPensDataIsLoading = false;
          state.uploadDatesAndPensDataResult = "rejected";
          state.uploadDatesAndPensDataError = action.payload;
        }
      );
  },
  selectors: {
    selectUploadDatesAndPensDataSelectors: createSelector(
      (state) => state.uploadDatesAndPensDataIsLoading,
      (state) => state.datesAndPensData,
      (state) => state.datesIncludeDaysClosed,
      (state) => state.dateClosedToAdd,
      (state) => state.datesClosedArray,
      (state) => state.uploadDatesAndPensDataResult,
      (state) => state.uploadDatesAndPensDataError,
      (
        uploadDatesAndPensDataIsLoading,
        datesAndPensData,
        datesIncludeDaysClosed,
        dateClosedToAdd,
        datesClosedArray,
        uploadDatesAndPensDataResult,
        uploadDatesAndPensDataError
      ) => {
        return {
          uploadDatesAndPensDataIsLoading,
          datesAndPensData,
          datesIncludeDaysClosed,
          dateClosedToAdd,
          datesClosedArray,
          uploadDatesAndPensDataResult,
          uploadDatesAndPensDataError,
        };
      }
    ),
  },
});

export const {
  setDateAndPensData,
  resetDateAndPensData,
  setDatesIncludeDatesClosed,
  resetDatesIncludeDatesClosed,
  setDateClosedToAdd,
  resetDateClosedToAdd,
  setDatesClosedArray,
  resetDatesClosedArray,
  resetUploadDatesAndPensDataResult,
  resetUploadDatesAndPensDataError,
  resetUploadDatesAndPensDataState,
} = uploadDatesAndPensDataSlice.actions;
export const { selectUploadDatesAndPensDataSelectors } =
  uploadDatesAndPensDataSlice.selectors;

export const uploadDatesAndPensDataReducer =
  uploadDatesAndPensDataSlice.reducer;

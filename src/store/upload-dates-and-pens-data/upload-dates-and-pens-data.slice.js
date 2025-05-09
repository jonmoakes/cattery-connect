import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

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
  extraReducers,
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

export const uploadDatesAndPensDataReducer =
  uploadDatesAndPensDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./initial-state";
import { extraReducers } from "./extra-reducers";

export const uploadBookingDataSlice = createSlice({
  name: "uploadBookingData",
  initialState: INITIAL_STATE,
  reducers: {
    setUploadBookingData(state, action) {
      state.uploadBookingData = action.payload;
    },
    resetUploadBookingDataResult(state) {
      state.uploadBookingDataResult = "";
    },
    resetUploadBookingDataError(state) {
      state.uploadBookingDataError = null;
    },
    resetUploadBookingDataState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers,
});

export const {
  setUploadBookingData,
  resetUploadBookingDataResult,
  resetUploadBookingDataError,
  resetUploadBookingDataState,
} = uploadBookingDataSlice.actions;

export const uploadBookingDataReducer = uploadBookingDataSlice.reducer;

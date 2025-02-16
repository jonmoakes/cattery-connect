import { createSelector, createSlice } from "@reduxjs/toolkit";
import { uploadBookingDataToDbAsync } from "./upload-booking-data.thunks";

const INITIAL_STATE = {
  uploadBookingData: {},
  uploadBookingDataIsLoading: false,
  uploadBookingDataResult: "",
  uploadBookingDataError: null,
};

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
  selectors: {
    selectUploadBookingDataSelectors: createSelector(
      (state) => state.uploadBookingData,
      (state) => state.uploadBookingDataIsLoading,
      (state) => state.uploadBookingDataResult,
      (state) => state.uploadBookingDataError,
      (
        uploadBookingData,
        uploadBookingDataIsLoading,
        uploadBookingDataResult,
        uploadBookingDataError
      ) => {
        return {
          uploadBookingData,
          uploadBookingDataIsLoading,
          uploadBookingDataResult,
          uploadBookingDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadBookingDataToDbAsync.pending, (state) => {
        state.uploadBookingDataIsLoading = true;
      })
      .addCase(uploadBookingDataToDbAsync.fulfilled, (state) => {
        state.uploadBookingDataIsLoading = false;
        state.uploadBookingDataResult = "fulfilled";
        state.uploadBookingDataError = null;
      })
      .addCase(uploadBookingDataToDbAsync.rejected, (state, action) => {
        state.uploadBookingDataIsLoading = false;
        state.uploadBookingDataResult = "rejected";
        state.uploadBookingDataError = action.payload;
      });
  },
});

export const {
  setUploadBookingData,
  resetUploadBookingDataResult,
  resetUploadBookingDataError,
  resetUploadBookingDataState,
} = uploadBookingDataSlice.actions;
export const { selectUploadBookingDataSelectors } =
  uploadBookingDataSlice.selectors;

export const uploadBookingDataReducer = uploadBookingDataSlice.reducer;

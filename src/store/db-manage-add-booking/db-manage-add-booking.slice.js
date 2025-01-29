import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { getAllOwnersCustomersAsync } from "./db-manage-add-booking.thunks";

const INITIAL_STATE = {
  dbManageAddBookingIsLoading: false,
  dbManageAddBookingData: {},
  dbManageAddBookingResult: "",
  dbManageAddBookingError: null,
};

export const dbManageAddBookingSlice = createSlice({
  name: "dbManageAddBooking",
  initialState: INITIAL_STATE,
  reducers: {
    setDbManageAddBookingData(state, action) {
      state.dbManageAddBookingData = action.payload;
    },
    resetDbManageAddBookingResult(state) {
      state.dbManageAddBookingResult = "";
    },
    resetDbManageAddBookingError(state) {
      state.dbManageAddBookingResult = null;
    },
    resetDbManageAddBookingState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectDbManageAddBookingSelectors: createSelector(
      (state) => state.dbManageAddBookingIsLoading,
      (state) => state.dbManageAddBookingData,
      (state) => state.dbManageAddBookingResult,
      (state) => state.dbManageAddBookingError,
      (
        dbManageAddBookingIsLoading,
        dbManageAddBookingData,
        dbManageAddBookingResult,
        dbManageAddBookingError
      ) => {
        return {
          dbManageAddBookingIsLoading,
          dbManageAddBookingData,
          dbManageAddBookingResult,
          dbManageAddBookingError,
        };
      }
    ),
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getAllOwnersCustomersAsync.pending, (state) => {
  //       state.getAllCustomersIsLoading = true;
  //     })
  //     .addCase(getAllOwnersCustomersAsync.fulfilled, (state, action) => {
  //       state.getAllCustomersIsLoading = false;
  //       state.allCustomers = action.payload;
  //       state.getAllCustomersError = null;
  //     })
  //     .addCase(getAllOwnersCustomersAsync.rejected, (state, action) => {
  //       state.getAllCustomersIsLoading = false;
  //       state.allCustomers = [];
  //       state.getAllCustomersError = action.payload;
  //     });
  // },
});

export const {
  setDbManageAddBookingData,
  resetDbManageAddBookingResult,
  resetDbManageAddBookingError,
  resetDbManageAddBookingState,
} = dbManageAddBookingSlice.actions;
export const { selectDbManageAddBookingSelectors } =
  dbManageAddBookingSlice.selectors;

export const dbManageAddBookingReducer = dbManageAddBookingSlice.reducer;

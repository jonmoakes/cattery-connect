import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchOwnerBookingsAsync,
  updateBookingPaymentStatusAsync,
} from "./bookings.thunks";

const INITIAL_STATE = {
  fetchOwnerBookingsIsLoading: false,
  ownerBookings: [],
  fetchOwnerBookingsResult: "",
  fetchOwnerBookingsError: null,
  updatePaymentStatusIsLoading: false,
  updatePaymentStatusResult: "",
  updatePaymentStatusError: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: INITIAL_STATE,
  reducers: {
    setOwnerBookings(state, action) {
      state.ownerBookings = action.payload;
    },
    resetFetchOwnerBookingsResult(state) {
      state.fetchOwnerBookingsResult = "";
    },
    resetFetchOwnerBookingsError(state) {
      state.fetchOwnerBookingsError = null;
    },
    resetUpdatePaymentStatusResult(state) {
      state.updatePaymentStatusResult = "";
    },
    resetUpdatePaymentStatusError(state) {
      state.updatePaymentStatusError = null;
    },
    resetBookingsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectBookingsSelectors: createSelector(
      (state) => state.fetchOwnerBookingsIsLoading,
      (state) => state.ownerBookings,
      (state) => state.fetchOwnerBookingsResult,
      (state) => state.fetchOwnerBookingsError,
      (state) => state.updatePaymentStatusIsLoading,
      (state) => state.updatePaymentStatusResult,
      (state) => state.updatePaymentStatusError,
      (
        fetchOwnerBookingsIsLoading,
        ownerBookings,
        fetchOwnerBookingsResult,
        fetchOwnerBookingsError,
        updatePaymentStatusIsLoading,
        updatePaymentStatusResult,
        updatePaymentStatusError
      ) => {
        const formattedOwnerBookings = ownerBookings
          ? ownerBookings.map((booking) => {
              return {
                ...booking,
                checkInDateAsDateObjectForSorting: new Date(
                  booking.checkInDate
                ),
              };
            })
          : [];

        const sortedOwnerBookings = formattedOwnerBookings.sort(
          (bookingA, bookingB) => {
            const dateA = new Date(bookingA.dateAsDateObjectForSorting);
            const dateB = new Date(bookingB.dateAsDateObjectForSorting);

            return dateA - dateB;
          }
        );
        return {
          fetchOwnerBookingsIsLoading,
          ownerBookings,
          fetchOwnerBookingsResult,
          fetchOwnerBookingsError,
          sortedOwnerBookings,
          updatePaymentStatusIsLoading,
          updatePaymentStatusResult,
          updatePaymentStatusError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOwnerBookingsAsync.pending, (state) => {
        state.fetchOwnerBookingsIsLoading = true;
      })
      .addCase(fetchOwnerBookingsAsync.fulfilled, (state, action) => {
        state.fetchOwnerBookingsIsLoading = false;
        state.ownerBookings = action.payload;
        state.fetchOwnerBookingsResult = "fulfilled";
        state.fetchOwnerBookingsError = null;
      })
      .addCase(fetchOwnerBookingsAsync.rejected, (state, action) => {
        state.fetchOwnerBookingsIsLoading = false;
        state.ownerBookings = [];
        state.fetchOwnerBookingsResult = "rejected";
        state.fetchOwnerBookingsError = action.payload;
      })
      .addCase(updateBookingPaymentStatusAsync.pending, (state) => {
        state.updatePaymentStatusIsLoading = true;
      })
      .addCase(updateBookingPaymentStatusAsync.fulfilled, (state) => {
        state.updatePaymentStatusIsLoading = false;
        state.updatePaymentStatusResult = "fulfilled";
        state.updatePaymentStatusError = null;
      })
      .addCase(updateBookingPaymentStatusAsync.rejected, (state, action) => {
        state.updatePaymentStatusIsLoading = false;
        state.updatePaymentStatusResult = "rejected";
        state.updatePaymentStatusError = action.payload;
      });
  },
});

export const {
  setOwnerBookings,
  resetFetchOwnerBookingsResult,
  resetFetchOwnerBookingsError,
  resetUpdatePaymentStatusResult,
  resetUpdatePaymentStatusError,
  resetBookingsState,
} = bookingsSlice.actions;
export const { selectBookingsSelectors } = bookingsSlice.selectors;

export const bookingsReducer = bookingsSlice.reducer;

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

export const selectBookingsSelectors = createSelector(
  (state) => state.bookings,
  (bookings) => {
    const { ownerBookings } = bookings;

    const formattedOwnerBookings = ownerBookings
      ? ownerBookings.map((booking) => ({
          ...booking,
          checkInDateAsDateObjectForSorting: new Date(booking.checkInDate),
        }))
      : [];

    const sortedOwnerBookings = formattedOwnerBookings.sort(
      (bookingA, bookingB) => {
        const dateA = new Date(bookingA.checkInDateAsDateObjectForSorting);
        const dateB = new Date(bookingB.checkInDateAsDateObjectForSorting);
        return dateA - dateB; // Sort in ascending order
      }
    );

    return {
      fetchOwnerBookingsIsLoading: bookings.fetchOwnerBookingsIsLoading,
      ownerBookings,
      sortedOwnerBookings,
      formattedOwnerBookings,
      fetchOwnerBookingsResult: bookings.fetchOwnerBookingsResult,
      fetchOwnerBookingsError: bookings.fetchOwnerBookingsError,
      updatePaymentStatusIsLoading: bookings.updatePaymentStatusIsLoading,
      updatePaymentStatusResult: bookings.updatePaymentStatusResult,
      updatePaymentStatusError: bookings.updatePaymentStatusError,
    };
  }
);

export const bookingsReducer = bookingsSlice.reducer;

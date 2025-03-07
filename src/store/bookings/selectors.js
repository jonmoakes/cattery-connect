import { createSelector } from "@reduxjs/toolkit";

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

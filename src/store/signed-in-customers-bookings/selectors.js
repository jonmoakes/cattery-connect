import { createSelector } from "@reduxjs/toolkit";

export const selectSignedInCustomersBookingsSelectors = createSelector(
  (state) => state.signedInCustomersBookings,
  (signedInCustomersBookings) => {
    const { customersBookings } = signedInCustomersBookings;

    const formattedCustomersBookings = customersBookings
      ? customersBookings.map((booking) => ({
          ...booking,
          checkInDateAsDateObjectForSorting: new Date(booking.checkInDate),
        }))
      : [];

    const sortedCustomersBookings = formattedCustomersBookings.sort(
      (bookingA, bookingB) => {
        const dateA = new Date(bookingA.checkInDateAsDateObjectForSorting);
        const dateB = new Date(bookingB.checkInDateAsDateObjectForSorting);
        return dateA - dateB; // Sort in ascending order
      }
    );

    return {
      signedInCustomersBookingsIsLoading:
        signedInCustomersBookings.signedInCustomersBookingsIsLoading,
      customersBookings,
      sortedCustomersBookings,
      formattedCustomersBookings,
      signedInCustomersBookingsResult:
        signedInCustomersBookings.signedInCustomersBookingsResult,
      signedInCustomersBookingsError:
        signedInCustomersBookings.signedInCustomersBookingsError,
      bookingConfirmationDetailsInfo:
        signedInCustomersBookings.bookingConfirmationDetailsInfo,
    };
  }
);

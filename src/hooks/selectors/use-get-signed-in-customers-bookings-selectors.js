import { useSelector } from "react-redux";

import { selectSignedInCustomersBookingsSelectors } from "../../store/signed-in-customers-bookings/selectors";

const useGetSignedInCustomersBookingsSelectors = () => {
  const {
    signedInCustomersBookingsIsLoading,
    customersBookings,
    signedInCustomersBookingsResult,
    signedInCustomersBookingsError,
    sortedCustomersBookings,
    bookingConfirmationDetailsInfo,
  } = useSelector(selectSignedInCustomersBookingsSelectors);

  const {
    $id,
    bookingId,
    checkInDate,
    checkOutDate,
    catsInBooking,
    totalCost,
  } = bookingConfirmationDetailsInfo ?? {};

  const hasBookingDetails = Object.keys(bookingConfirmationDetailsInfo).length;

  return {
    signedInCustomersBookingsIsLoading,
    customersBookings,
    signedInCustomersBookingsResult,
    signedInCustomersBookingsError,
    sortedCustomersBookings,
    bookingConfirmationDetailsInfo,
    $id,
    bookingId,
    checkInDate,
    checkOutDate,
    catsInBooking,
    totalCost,
    hasBookingDetails,
  };
};

export default useGetSignedInCustomersBookingsSelectors;

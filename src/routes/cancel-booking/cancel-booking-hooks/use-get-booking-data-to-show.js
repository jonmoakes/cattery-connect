import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";

const useGetBookingDataToShow = () => {
  const {
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    paymentStatus,
  } = useGetCancelBookingSelectors();

  const bookingDataToShow = {
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    paymentStatus,
  };

  return {
    bookingDataToShow,
  };
};

export default useGetBookingDataToShow;

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
  } = useGetCancelBookingSelectors();

  const bookingDataToShow = {
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  };

  return {
    bookingDataToShow,
  };
};

export default useGetBookingDataToShow;

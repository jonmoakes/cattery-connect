import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";

const useCancelBookingVariables = () => {
  const {
    dataForAvailabilityDocsRequest,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  } = useGetCancelBookingSelectors();

  const hasDataPassedFromBookingsTable =
    Object.keys(dataForAvailabilityDocsRequest).length > 0;

  const bookingDataToShow = {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  };

  return {
    dataForAvailabilityDocsRequest,
    hasDataPassedFromBookingsTable,
    bookingDataToShow,
  };
};

export default useCancelBookingVariables;

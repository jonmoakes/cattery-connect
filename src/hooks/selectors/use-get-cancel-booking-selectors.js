import { useSelector } from "react-redux";

import { selectCancelBookingSelectors } from "../../store/cancel-booking/cancel-booking.slice";

const useGetCancelBookingSelectors = () => {
  const {
    fetchAvailabilityDocsToUpdateIsLoading,
    dataForAvailabilityDocsRequest,
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
  } = useSelector(selectCancelBookingSelectors);

  const {
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  } = dataForAvailabilityDocsRequest ?? {};

  return {
    fetchAvailabilityDocsToUpdateIsLoading,
    dataForAvailabilityDocsRequest,
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  };
};

export default useGetCancelBookingSelectors;

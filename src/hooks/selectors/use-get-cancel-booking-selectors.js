import { useSelector } from "react-redux";

import { selectCancelBookingSelectors } from "../../store/cancel-booking/cancel-booking.slice";

const useGetCancelBookingSelectors = () => {
  const {
    fetchAvailabilityDocsToUpdateIsLoading,
    dataFromBooking,
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataIsLoading,
    deleteBookingDataResult,
    deleteBookingDataError,
  } = useSelector(selectCancelBookingSelectors);

  const {
    $id,
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    customerEmail,
  } = dataFromBooking ?? {};

  return {
    fetchAvailabilityDocsToUpdateIsLoading,
    dataFromBooking,
    customerEmail,
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    $id,
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    deleteBookingDataIsLoading,
    deleteBookingDataResult,
    deleteBookingDataError,
  };
};

export default useGetCancelBookingSelectors;

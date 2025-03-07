import { useSelector } from "react-redux";

import { selectCancelBookingSelectors } from "../../store/cancel-booking/selectors";

const useGetCancelBookingSelectors = () => {
  const {
    fetchAvailabilityDocsToUpdateIsLoading,
    deleteBookingDataIsLoading,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
    dataFromBooking,
    availabilityDocsToUpdate,
  } = useSelector(selectCancelBookingSelectors);

  const {
    $id,
    bookingId,
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    customerEmail,
    paymentStatus,
  } = dataFromBooking ?? {};

  const hasBookingToCancelData = Object.keys(dataFromBooking).length > 0;

  return {
    fetchAvailabilityDocsToUpdateIsLoading,
    deleteBookingDataIsLoading,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
    dataFromBooking,
    availabilityDocsToUpdate,
    $id,
    bookingId,
    catsInBooking,
    catteryId,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    customerEmail,
    paymentStatus,
    hasBookingToCancelData,
  };
};

export default useGetCancelBookingSelectors;

import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetUpdatePensDataSelectors from "../../../hooks/selectors/use-get-update-pens-data-selectors";

const useCancelBookingVariables = () => {
  const {
    fetchAvailabilityDocsToUpdateIsLoading,
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateError,
    dataFromBooking,
    $id,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    parsedAvailabilityData,
    deleteBookingDataIsLoading,
    deleteBookingDataResult,
    deleteBookingDataError,
  } = useGetCancelBookingSelectors();
  const { updatePensDataIsLoading, updatePensDataResult, updatePensDataError } =
    useGetUpdatePensDataSelectors();

  const hasDataPassedFromBookingsTable =
    Object.keys(dataFromBooking).length > 0;

  const bookingDataToShow = {
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
  };

  return {
    updatePensDataIsLoading,
    fetchAvailabilityDocsToUpdateIsLoading,
    fetchAvailabilityDocsToUpdateError,
    $id,
    dataFromBooking,
    availabilityDocsToUpdate,
    bookingDataToShow,
    parsedAvailabilityData,
    hasDataPassedFromBookingsTable,
    deleteBookingDataIsLoading,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataResult,
    updatePensDataError,
  };
};

export default useCancelBookingVariables;

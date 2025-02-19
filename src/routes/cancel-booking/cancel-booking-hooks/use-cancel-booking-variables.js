import useGetCancelBookingSelectors from "../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetUpdatePensDataSelectors from "../../../hooks/selectors/use-get-update-pens-data-selectors";

const useCancelBookingVariables = () => {
  const {
    availabilityDocsToUpdate,
    fetchAvailabilityDocsToUpdateError,
    dataFromBooking,
    $id,
    bookingId,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    customerName,
    customerEmail,
    parsedAvailabilityData,
    deleteBookingDataResult,
    deleteBookingDataError,
  } = useGetCancelBookingSelectors();
  const { updatePensDataResult, updatePensDataError } =
    useGetUpdatePensDataSelectors();
  const { requiredCatteryDataError, name, phone, catteryEmail } =
    useGetRequiredCatteryDataForBookingSelectors();

  const hasDataPassedFromBookingsTable =
    Object.keys(dataFromBooking).length > 0;

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
    customerEmail,
    fetchAvailabilityDocsToUpdateError,
    $id,
    dataFromBooking,
    availabilityDocsToUpdate,
    bookingDataToShow,
    parsedAvailabilityData,
    hasDataPassedFromBookingsTable,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataResult,
    updatePensDataError,
    requiredCatteryDataError,
    name,
    phone,
    catteryEmail,
  };
};

export default useCancelBookingVariables;

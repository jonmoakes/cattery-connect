import { useSelector } from "react-redux";

import { selectDbManageAddBookingSelectors } from "../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useGetDbManageAddBookingSelectors = () => {
  const {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
    addBookingData,
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
    updatePensDataIsLoading,
    updatePensDataResult,
    updatePensDataError,
    addBookingDataIsLoading,
    addBookingDataResult,
    addBookingDataError,
  } = useSelector(selectDbManageAddBookingSelectors);

  const {
    customerDocumentId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = addBookingData ?? {};

  const { status, failingDates, parsedAvailabilityData } =
    isBookingAvailableResult ?? {};

  const {
    catteryAllowsLargerPensBool,
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    email: catteryEmail,
  } = requiredCatteryData ?? {};

  return {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
    catteryAllowsLargerPensBool,
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    catteryEmail,
    addBookingData,
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
    updatePensDataIsLoading,
    updatePensDataResult,
    updatePensDataError,
    addBookingDataIsLoading,
    addBookingDataResult,
    addBookingDataError,
    customerDocumentId,
    customerName,
    customerEmail,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    status,
    failingDates,
    parsedAvailabilityData,
  };
};

export default useGetDbManageAddBookingSelectors;

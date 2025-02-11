import { useSelector } from "react-redux";

import { selectDbManageAddBookingSelectors } from "../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useGetDbManageAddBookingSelectors = () => {
  const {
    catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading,
    catteryAllowsLargerPensBoolAndMaxCatsPerPen,
    catteryAllowsLargerPensAndMaxCatsPerPenResult,
    catteryAllowsLargerPensAndMaxCatsPerPenError,
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
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = addBookingData ?? {};

  const { status, failingDates, parsedAvailabilityData } =
    isBookingAvailableResult ?? {};

  const { catteryAllowsLargerPensBool, maximumCatsInSinglePen } =
    catteryAllowsLargerPensBoolAndMaxCatsPerPen ?? {};

  return {
    catteryAllowsLargerPensBoolAndMaxCatsPerPenIsLoading,
    catteryAllowsLargerPensBoolAndMaxCatsPerPen,
    catteryAllowsLargerPensAndMaxCatsPerPenResult,
    catteryAllowsLargerPensAndMaxCatsPerPenError,
    catteryAllowsLargerPensBool,
    maximumCatsInSinglePen,
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

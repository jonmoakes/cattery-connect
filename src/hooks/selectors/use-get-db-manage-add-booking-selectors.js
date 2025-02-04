import { useSelector } from "react-redux";

import { selectDbManageAddBookingSelectors } from "../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useGetDbManageAddBookingSelectors = () => {
  const {
    dbManageAddBookingIsLoading,
    catteryAllowsLargerPensBool,
    catteryAllowsLargerPensResult,
    catteryAllowsLargerPensError,
    dbManageAddBookingCheckAvailabilityIsLoading,
    dbManageAddBookingData,
    dbManageIsBookingAvailableIsLoading,
    dbManageIsBookingAvailableResult,
    dbManageIsBookingAvailableError,
    dbManageAddBookingResult,
    dbManageAddBookingError,
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
  } = dbManageAddBookingData ?? {};

  const { status, failingDates } = dbManageIsBookingAvailableResult ?? {};

  return {
    dbManageAddBookingIsLoading,
    catteryAllowsLargerPensBool,
    catteryAllowsLargerPensResult,
    catteryAllowsLargerPensError,
    dbManageAddBookingCheckAvailabilityIsLoading,
    dbManageAddBookingData,
    dbManageIsBookingAvailableIsLoading,
    dbManageIsBookingAvailableResult,
    dbManageIsBookingAvailableError,
    dbManageAddBookingResult,
    dbManageAddBookingError,
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
  };
};

export default useGetDbManageAddBookingSelectors;

import { useSelector } from "react-redux";

import { selectDbManageAddBookingSelectors } from "../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useGetDbManageAddBookingSelectors = () => {
  const {
    dbManageAddBookingIsLoading,
    dbManageAddBookingData,
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

  return {
    dbManageAddBookingIsLoading,
    dbManageAddBookingData,
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
  };
};

export default useGetDbManageAddBookingSelectors;

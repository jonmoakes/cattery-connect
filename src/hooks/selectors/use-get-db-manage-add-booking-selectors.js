import { useSelector } from "react-redux";

import { selectDbManageAddBookingSelectors } from "../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useGetDbManageAddBookingSelectors = () => {
  const {
    dbManageAddBookingIsLoading,
    dbManageAddBookingData,
    dbManageAddBookingResult,
    dbManageAddBookingError,
  } = useSelector(selectDbManageAddBookingSelectors);

  const { customerDocumentId, customerName, catDetails } =
    dbManageAddBookingData ?? {};

  return {
    dbManageAddBookingIsLoading,
    dbManageAddBookingData,
    dbManageAddBookingResult,
    dbManageAddBookingError,
    customerDocumentId,
    customerName,
    catDetails,
  };
};

export default useGetDbManageAddBookingSelectors;

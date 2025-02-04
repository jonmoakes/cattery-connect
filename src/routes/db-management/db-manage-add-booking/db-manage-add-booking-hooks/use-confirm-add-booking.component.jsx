import { useDispatch } from "react-redux";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { checkBookingAvailabilityAsync } from "../../../../store/db-manage-add-booking/db-manage-add-booking.thunks";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";

const useConfirmAddBooking = () => {
  const {
    dbManageAddBookingData,
    customerDocumentId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    catteryAllowsLargerPensBool,
  } = useGetDbManageAddBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const shouldShowAvailabilityCheckButton =
    customerDocumentId &&
    customerName &&
    catsInBooking &&
    checkInDate &&
    checkInSlot &&
    checkOutDate &&
    checkOutSlot &&
    true;

  const checkBookingAvailability = (event) => {
    event.preventDefault();
    dispatch(
      checkBookingAvailabilityAsync({
        dbManageAddBookingData,
        catteryId,
        catteryAllowsLargerPensBool,
      })
    );
  };

  return { shouldShowAvailabilityCheckButton, checkBookingAvailability };
};

export default useConfirmAddBooking;

import { useDispatch } from "react-redux";
import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import { checkBookingAvailabilityAsync } from "../../../../store/db-manage-add-booking/db-manage-add-booking.thunks";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import { setShowIneligibleDates } from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

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
    showIneligibleDates,
  } = useGetDbManageAddBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const shouldShowFormSubmissionButtons =
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
    if (showIneligibleDates) {
      dispatch(setShowIneligibleDates(false));
    }
    dispatch(
      checkBookingAvailabilityAsync({
        dbManageAddBookingData,
        catteryId,
        catteryAllowsLargerPensBool,
      })
    );
  };

  return { shouldShowFormSubmissionButtons, checkBookingAvailability };
};

export default useConfirmAddBooking;

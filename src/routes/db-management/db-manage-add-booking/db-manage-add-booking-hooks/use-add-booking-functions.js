import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  checkBookingAvailabilityAsync,
  updatePensDataAsync,
  uploadBookingDataAsync,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.thunks";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import {
  resetIsBookingAvailableResult,
  setShowIneligibleDates,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { imSureMessage } from "../../../../strings/confirms";
import useAddBookingVariables from "./use-add-booking-variables";

const useAddBookingFunctions = () => {
  const {
    addBookingData,
    customerDocumentId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    catteryAllowsLargerPensBool,
    showIneligibleDates,
    parsedAvailabilityData,
  } = useGetDbManageAddBookingSelectors();
  const { moreCatsInBookingThanCapacityInOnePen } = useAddBookingVariables();
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const shouldShowFormSubmissionButtons =
    !moreCatsInBookingThanCapacityInOnePen &&
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
        addBookingData,
        catteryId,
        catteryAllowsLargerPensBool,
      })
    );
  };

  const confirmPlaceBooking = () => {
    const operation = "deduct";
    confirmSwal(
      "are you sure that you want to place this booking?",
      "",
      imSureMessage,
      "",
      () =>
        dispatch(
          updatePensDataAsync({
            addBookingData,
            catteryAllowsLargerPensBool,
            parsedAvailabilityData,
            operation,
          })
        ).then((resultAction) => {
          if (updatePensDataAsync.fulfilled.match(resultAction)) {
            dispatch(uploadBookingDataAsync({ addBookingData, catteryId }));
          }
        }),
      null
    );
  };

  const handleChangeDetailsRequest = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(resetIsBookingAvailableResult());
  };

  return {
    shouldShowFormSubmissionButtons,
    checkBookingAvailability,
    confirmPlaceBooking,
    handleChangeDetailsRequest,
  };
};

export default useAddBookingFunctions;

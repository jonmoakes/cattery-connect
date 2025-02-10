import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const {
    addBookingData,
    isBookingAvailableResult,
    isBookingAvailableError,
    status,
  } = useGetDbManageAddBookingSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      (!isBookingAvailableResult && !isBookingAvailableError) ||
      status === "bookingAvailable"
    )
      return;

    if (isBookingAvailableResult === "rejected") {
      fireSwal(
        "error",
        isBookingAvailableError.includes(
          "we are not able to make this booking because the cattery is not available for bookings on the following dates:"
        )
          ? isBookingAvailableError
          : errorReceivedMessage(
              "Error checking date availability.",
              isBookingAvailableError
            ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetIsBookingAvailableResult());
          dispatch(resetIsBookingAvailableError());
        }
      });
    }
  }, [
    isBookingAvailableResult,
    isBookingAvailableError,
    dispatch,
    fireSwal,
    status,
    confirmSwal,
    addBookingData,
  ]);
};

export default useCheckBookingAvailableResultSwalUseEffect;

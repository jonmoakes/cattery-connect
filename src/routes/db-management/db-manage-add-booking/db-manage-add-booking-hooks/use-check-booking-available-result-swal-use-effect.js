import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import {
  resetDbManageIsBookingAvailableError,
  resetDbManageIsBookingAvailableResult,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const {
    dbManageIsBookingAvailableResult,
    dbManageIsBookingAvailableError,
    status,
  } = useGetDbManageAddBookingSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dbManageIsBookingAvailableResult && !dbManageIsBookingAvailableError)
      return;

    if (status === "bookingAvailable") {
      dispatch(resetDbManageIsBookingAvailableResult());
      console.log("booked");
      // confirmSwal(
      //   "are yousure you want to place this booking?",
      //   "",
      //   imSureMessage,
      //   "",
      //   () => alert("booked!"),
      //   null
      // );
    } else if (dbManageIsBookingAvailableResult === "rejected") {
      const error = dbManageIsBookingAvailableError;

      fireSwal(
        "error",
        error === "noCheckInOrOutDate"
          ? "sorry, we have no availability on either of your selected check in or check out dates.."
          : error === "noCheckInDate"
          ? "sorry, we have no availability on your selected check in date.."
          : error === "noCheckOutDate"
          ? "sorry, we have no availability on your selected check out date.."
          : errorReceivedMessage(
              "error checking booking availability..",
              error
            ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDbManageIsBookingAvailableResult());
          dispatch(resetDbManageIsBookingAvailableError());
        }
      });
    }
  }, [
    dbManageIsBookingAvailableResult,
    dbManageIsBookingAvailableError,
    dispatch,
    fireSwal,
    status,
    confirmSwal,
  ]);
};

export default useCheckBookingAvailableResultSwalUseEffect;

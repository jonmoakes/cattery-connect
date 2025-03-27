import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import {
  resetDeleteBookingDataError,
  resetDeleteBookingDataResult,
} from "../../../../store/cancel-booking/cancel-booking.slice";
import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useManagesOwnPensAndDeleteBookingDataFailedSwal = () => {
  const { deleteBookingDataError } = useGetCancelBookingSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const managesOwnPensAndDeleteBookingDataFailedSwal = useCallback(() => {
    fireSwal(
      "error",
      errorReceivedMessage(
        `there was an error cancelling the booking.

(deleteBookingDataThunk)
  `,
        deleteBookingDataError
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetDeleteBookingDataResult());
        dispatch(resetDeleteBookingDataError());
      }
    });
  }, [deleteBookingDataError, dispatch, fireSwal]);

  return { managesOwnPensAndDeleteBookingDataFailedSwal };
};
export default useManagesOwnPensAndDeleteBookingDataFailedSwal;

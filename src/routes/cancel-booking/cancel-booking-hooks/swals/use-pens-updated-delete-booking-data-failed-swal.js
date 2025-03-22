import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";

import { sendEmailDeleteBookingDataFailedAsync } from "../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { pensUpdatedBookingDataNotDeletedErrorMessage } from "../../../../strings/errors";

const usePensUpdatedDeleteBookingDataFailedSwal = () => {
  const { $id, deleteBookingDataError } = useGetCancelBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const pensUpdatedDeleteBookingDataFailedSwal = useCallback(
    (setSwalConfirmed) => {
      fireSwal(
        "error",
        pensUpdatedBookingDataNotDeletedErrorMessage,
        "",
        0,
        "send email",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          dispatch(
            sendEmailDeleteBookingDataFailedAsync({
              catteryId,
              $id,
              deleteBookingDataError,
            })
          );
        }
      });
    },
    [$id, catteryId, deleteBookingDataError, dispatch, fireSwal]
  );

  return { pensUpdatedDeleteBookingDataFailedSwal };
};
export default usePensUpdatedDeleteBookingDataFailedSwal;

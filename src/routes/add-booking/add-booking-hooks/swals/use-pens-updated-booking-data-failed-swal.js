import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";

import { sendEmailPensUpdatedBookingDataFailedAsync } from "../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { pensUpdatedBookingDataNotAddedErrorMessage } from "../../../../strings/errors";

const usePensUpdatedBookingDataFailedSwal = () => {
  const { uploadBookingDataError, uploadBookingData } =
    useGetUploadBookingDataSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const pensUpdatedBookingDataFailedSwal = useCallback(
    (setSwalConfirmed) => {
      fireSwal(
        "error",
        pensUpdatedBookingDataNotAddedErrorMessage,
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
            sendEmailPensUpdatedBookingDataFailedAsync({
              uploadBookingData,
              catteryId,
              uploadBookingDataError,
            })
          );
        }
      });
    },
    [catteryId, uploadBookingData, uploadBookingDataError, dispatch, fireSwal]
  );

  return { pensUpdatedBookingDataFailedSwal };
};
export default usePensUpdatedBookingDataFailedSwal;

import { useDispatch } from "react-redux";

import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";

import { sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync } from "../../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { pensUpdatedBookingDataNotAddedErrorMessage } from "../../../../../strings/errors";

const usePensUpdatedBookingDataFailedSwal = () => {
  const { uploadBookingDataError, uploadBookingData } =
    useGetUploadBookingDataSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const pensUpdatedBookingDataFailedSwal = (setSwalConfirmed) => {
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
          sendEmailCatteryConnectPensUpdatedBookingDataFailedAsync({
            uploadBookingData,
            catteryId,
            uploadBookingDataError,
          })
        );
      }
    });
  };

  return { pensUpdatedBookingDataFailedSwal };
};
export default usePensUpdatedBookingDataFailedSwal;

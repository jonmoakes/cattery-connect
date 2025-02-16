import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";
import useGetUpdatePensDataSelectors from "../../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import { sendEmailCatteryConnectUpdatePensRollbackErrorAsync } from "../../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { updatePensDataErrorMessage } from "../../../../../strings/errors";

const usePenDataRollbackErrorSwal = () => {
  const { updatePensDataError } = useGetUpdatePensDataSelectors();
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const penDataRollbackErrorSwal = (setSwalConfirmed) => {
    fireSwal(
      "error",
      updatePensDataErrorMessage(
        "important message!",
        updatePensDataError.message
      ),
      "",
      0,
      "send email",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        const { operation, rollbackFailures, originalAvailabilityData } =
          updatePensDataError ?? {};

        setSwalConfirmed(true);

        dispatch(
          sendEmailCatteryConnectUpdatePensRollbackErrorAsync({
            uploadBookingData,
            rollbackFailures,
            originalAvailabilityData,
            catteryId,
            operation,
          })
        );
      }
    });
  };

  return { penDataRollbackErrorSwal };
};

export default usePenDataRollbackErrorSwal;

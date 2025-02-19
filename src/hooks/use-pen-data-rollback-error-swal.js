import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetCancelBookingSelectors from "./selectors/use-get-cancel-booking-selectors";
import useGetCurrentUserSelectors from "../hooks/selectors/use-get-current-user-selectors";
import useGetUpdatePensDataSelectors from "../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../hooks/selectors/use-get-upload-booking-data-selectors";
import { sendEmailCatteryConnectUpdatePensRollbackErrorAsync } from "../store/send-email/send-email.thunks";
import useFireSwal from "../hooks/use-fire-swal";

import { updatePensDataErrorMessage } from "../strings/errors";
import { addBookingRoute, cancelBookingRoute } from "../strings/routes";

const usePenDataRollbackErrorSwal = () => {
  const { updatePensDataError } = useGetUpdatePensDataSelectors();
  const { uploadBookingData } = useGetUploadBookingDataSelectors();
  const { dataFromBooking } = useGetCancelBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const bookingDataWithCatsInBookingConvertedToArray = {
    ...dataFromBooking,
    catsInBooking: dataFromBooking?.catsInBooking
      ? dataFromBooking.catsInBooking.split(",").map((cat) => cat.trim())
      : [],
  };

  const dataForEmail =
    path === addBookingRoute
      ? uploadBookingData
      : path === cancelBookingRoute &&
        bookingDataWithCatsInBookingConvertedToArray;

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
            dataForEmail,
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

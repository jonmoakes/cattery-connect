import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import useCancelBookingVariables from "../use-cancel-booking-variables";
import { sendEmailCatteryConnectDeleteBookingDataFailedAsync } from "../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { pensUpdatedBookingDataNotDeletedErrorMessage } from "../../../../strings/errors";

const usePensUpdatedDeleteBookingDataFailedSwal = () => {
  const { $id, deleteBookingDataError } = useCancelBookingVariables();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const pensUpdatedDeleteBookingDataFailedSwal = (setSwalConfirmed) => {
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
          sendEmailCatteryConnectDeleteBookingDataFailedAsync({
            catteryId,
            $id,
            deleteBookingDataError,
          })
        );
      }
    });
  };

  return { pensUpdatedDeleteBookingDataFailedSwal };
};
export default usePensUpdatedDeleteBookingDataFailedSwal;

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";
import { sendEmailCatteryConnectPensUpdatedAddBookingDataFailedAsync } from "../../../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { pensUpdatedBookingDataNotAddedErrorMessage } from "../../../../../strings/errors";
import { useDispatch } from "react-redux";

const usePensUpdatedUploadBookingDataFailedSwal = () => {
  const { addBookingDataError, addBookingData } =
    useGetDbManageAddBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const pensUpdatedUploadBookingDataFailedSwal = (setSwalConfirmed) => {
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
          sendEmailCatteryConnectPensUpdatedAddBookingDataFailedAsync({
            addBookingData,
            catteryId,
            addBookingDataError,
          })
        );
      }
    });
  };

  return { pensUpdatedUploadBookingDataFailedSwal };
};
export default usePensUpdatedUploadBookingDataFailedSwal;

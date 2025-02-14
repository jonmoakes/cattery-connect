import { useDispatch } from "react-redux";
import useFireSwal from "../../../../../hooks/use-fire-swal";
import { sendEmailCatteryConnectUpdatePensRollbackErrorAsync } from "../../../../../store/send-email/send-email.thunks";
import { updatePensDataErrorMessage } from "../../../../../strings/errors";
import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useGetCurrentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";

const usePenDataRollbackErrorSwal = () => {
  const { updatePensDataError, addBookingData } =
    useGetDbManageAddBookingSelectors();
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
            addBookingData,
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

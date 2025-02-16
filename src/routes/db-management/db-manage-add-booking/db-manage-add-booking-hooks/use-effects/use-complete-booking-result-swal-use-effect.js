import { useEffect, useState } from "react";

import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useBookingCompleteSwal from "../swals/use-booking-complete-swal";
import usePenDataRollbackErrorSwal from "../swals/use-pen-data-rollback-error-swal";
import useUpdatePensErrorSwal from "../swals/use-update-pens-error-swal";
import usePensUpdatedUploadBookingDataFailedSwal from "../swals/use-pens-updated-upload-booking-data-failed-swal";
import { pensRollbackFailureErrorCode } from "../../../../../constants/constants";

const useCompleteBookingResultSwalUseEffect = () => {
  const {
    updatePensDataResult,
    updatePensDataError,
    addBookingDataResult,
    addBookingDataError,
  } = useGetDbManageAddBookingSelectors();

  const { bookingCompleteSwal } = useBookingCompleteSwal();
  const { penDataRollbackErrorSwal } = usePenDataRollbackErrorSwal();
  const { updatePensErrorSwal } = useUpdatePensErrorSwal();
  const { pensUpdatedUploadBookingDataFailedSwal } =
    usePensUpdatedUploadBookingDataFailedSwal();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if (
      (!updatePensDataResult &&
        !updatePensDataError &&
        !addBookingDataResult &&
        !addBookingDataError) ||
      swalConfirmed
    )
      return;

    if (
      updatePensDataResult === "fulfilled" &&
      addBookingDataResult === "fulfilled"
    ) {
      bookingCompleteSwal(setSwalConfirmed);
    } else if (updatePensDataResult === "rejected") {
      if (
        updatePensDataError.message &&
        updatePensDataError.message.includes(
          `error code '${pensRollbackFailureErrorCode}'`
        )
      ) {
        penDataRollbackErrorSwal(setSwalConfirmed);
      } else {
        updatePensErrorSwal();
      }
    } else if (
      updatePensDataResult === "fulfilled" &&
      addBookingDataResult === "rejected"
    ) {
      pensUpdatedUploadBookingDataFailedSwal(setSwalConfirmed);
    }
  }, [
    addBookingDataError,
    addBookingDataResult,
    bookingCompleteSwal,
    penDataRollbackErrorSwal,
    pensUpdatedUploadBookingDataFailedSwal,
    swalConfirmed,
    updatePensDataError,
    updatePensDataResult,
    updatePensErrorSwal,
  ]);
};

export default useCompleteBookingResultSwalUseEffect;

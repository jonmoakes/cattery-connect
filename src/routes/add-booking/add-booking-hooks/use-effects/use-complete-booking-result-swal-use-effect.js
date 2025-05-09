import { useEffect, useState } from "react";

import useGetUpdatePensDataSelectors from "../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";

import useBookingCompleteSwal from "../swals/use-booking-complete-swal";
import usePenDataRollbackErrorSwal from "../../../../hooks/use-pen-data-rollback-error-swal";
import useUpdatePensErrorSwal from "../../../../hooks/use-update-pens-error-swal";
import usePensUpdatedBookingDataFailedSwal from "../swals/use-pens-updated-booking-data-failed-swal";
import useManagesOwnPensAndBookingDataFailedSwal from "../swals/use-manages-own-pens-and-booking-data-failed-swal";

import { pensRollbackFailureErrorCode } from "../../../../constants/error-constants";

const useCompleteBookingResultSwalUseEffect = () => {
  const { updatePensDataResult, updatePensDataError } =
    useGetUpdatePensDataSelectors();
  const { uploadBookingDataResult, uploadBookingDataError } =
    useGetUploadBookingDataSelectors();
  const { managesOwnPens } = useGetCatteryDetailsSelectors();

  const { bookingCompleteSwal } = useBookingCompleteSwal();
  const { penDataRollbackErrorSwal } = usePenDataRollbackErrorSwal();
  const { updatePensErrorSwal } = useUpdatePensErrorSwal();
  const { pensUpdatedBookingDataFailedSwal } =
    usePensUpdatedBookingDataFailedSwal();
  const { managesOwnPensAndBookingDataFailedSwal } =
    useManagesOwnPensAndBookingDataFailedSwal();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if (
      (!updatePensDataResult &&
        !updatePensDataError &&
        !uploadBookingDataResult &&
        !uploadBookingDataError) ||
      swalConfirmed
    )
      return;

    if (
      (managesOwnPens && uploadBookingDataResult === "fulfilled") ||
      (!managesOwnPens &&
        updatePensDataResult === "fulfilled" &&
        uploadBookingDataResult === "fulfilled")
    ) {
      bookingCompleteSwal(setSwalConfirmed);
    } else if (managesOwnPens && uploadBookingDataResult === "rejected") {
      managesOwnPensAndBookingDataFailedSwal();
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
      uploadBookingDataResult === "rejected"
    ) {
      pensUpdatedBookingDataFailedSwal(setSwalConfirmed);
    }
  }, [
    uploadBookingDataError,
    uploadBookingDataResult,
    bookingCompleteSwal,
    penDataRollbackErrorSwal,
    pensUpdatedBookingDataFailedSwal,
    swalConfirmed,
    updatePensDataError,
    updatePensDataResult,
    updatePensErrorSwal,
    managesOwnPens,
    managesOwnPensAndBookingDataFailedSwal,
  ]);
};

export default useCompleteBookingResultSwalUseEffect;

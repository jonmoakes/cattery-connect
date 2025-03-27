import { useEffect, useState } from "react";

import useGetUpdatePensDataSelectors from "../../../../hooks/selectors/use-get-update-pens-data-selectors";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";

import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useBookingCancelledSuccessSwal from "../swals/use-booking-cancelled-success-swal";
import usePenDataRollbackErrorSwal from "../../../../hooks/use-pen-data-rollback-error-swal";
import useUpdatePensErrorSwal from "../../../../hooks/use-update-pens-error-swal";
import usePensUpdatedDeleteBookingDataFailedSwal from "../swals/use-pens-updated-delete-booking-data-failed-swal";

import { pensRollbackFailureErrorCode } from "../../../../constants/constants";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";
import useManagesOwnPensAndDeleteBookingDataFailedSwal from "../swals/use-manages-own-pens-and-delete-booking-data-failed-swal";

const useCancelBookingResultSwalUseEffect = () => {
  const {
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
  } = useGetCancelBookingSelectors();
  const { updatePensDataResult, updatePensDataError } =
    useGetUpdatePensDataSelectors();
  const { managesOwnPens } = useGetCatteryDetailsSelectors();
  const { bookingCancelledSuccessSwal } = useBookingCancelledSuccessSwal();
  const { penDataRollbackErrorSwal } = usePenDataRollbackErrorSwal();
  const { updatePensErrorSwal } = useUpdatePensErrorSwal();
  const { pensUpdatedDeleteBookingDataFailedSwal } =
    usePensUpdatedDeleteBookingDataFailedSwal();
  const { managesOwnPensAndDeleteBookingDataFailedSwal } =
    useManagesOwnPensAndDeleteBookingDataFailedSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if (
      (!fetchAvailabilityDocsToUpdateResult &&
        !fetchAvailabilityDocsToUpdateError &&
        !updatePensDataResult &&
        !updatePensDataError &&
        !deleteBookingDataResult &&
        !deleteBookingDataError) ||
      swalConfirmed
    )
      return;

    if (
      (managesOwnPens && deleteBookingDataResult === "fulfilled") ||
      (!managesOwnPens &&
        updatePensDataResult === "fulfilled" &&
        deleteBookingDataResult === "fulfilled")
    ) {
      bookingCancelledSuccessSwal(setSwalConfirmed);
    } else if (managesOwnPens && deleteBookingDataResult === "rejected") {
      managesOwnPensAndDeleteBookingDataFailedSwal();
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
      deleteBookingDataResult === "rejected"
    ) {
      pensUpdatedDeleteBookingDataFailedSwal(setSwalConfirmed);
    }
  }, [
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataResult,
    updatePensDataError,
    hamburgerHandlerNavigate,
    bookingCancelledSuccessSwal,
    swalConfirmed,
    penDataRollbackErrorSwal,
    updatePensErrorSwal,
    pensUpdatedDeleteBookingDataFailedSwal,
    managesOwnPensAndDeleteBookingDataFailedSwal,
    managesOwnPens,
  ]);
};

export default useCancelBookingResultSwalUseEffect;

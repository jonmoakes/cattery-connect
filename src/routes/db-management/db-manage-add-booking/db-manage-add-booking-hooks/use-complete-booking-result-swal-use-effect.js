import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";

import // resetDbManageAddBookingDataError,
// resetDbManageAddBookingDataResult,
// resetDbManageUpdatePensDataError,
// resetDbManageUpdatePensDataResult,
"../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import {
  errorReceivedMessage,
  updatePensDataErrorMessage,
} from "../../../../strings/errors";
import { accountRoute } from "../../../../strings/routes";
import {
  resetAddBookingDataError,
  resetAddBookingDataResult,
  resetUpdatePensDataError,
  resetUpdatePensDataResult,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";
import { sendEmailCatteryConnectUpdatePensRollbackErrorAsync } from "../../../../store/send-email/send-email.thunks";

const useCompleteBookingResultSwalUseEffect = () => {
  const {
    updatePensDataResult,
    updatePensDataError,
    addBookingDataResult,
    addBookingDataError,
    // addBookingData,
  } = useGetDbManageAddBookingSelectors();
  const { catteryId } = useGetCurrentUserSelectors();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

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
      fireSwal(
        "success",
        "booking completed!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          confirmSwal(
            "would you like to make another booking?",
            "",
            `yes`,
            "no",
            () => window.location.reload(),
            () => hamburgerHandlerNavigate(accountRoute)
          );
        }
      });
    } else if (updatePensDataResult === "rejected") {
      if (
        updatePensDataError.message &&
        updatePensDataError.message.includes("error code 'RBF'")
      ) {
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
            // const { operation, rollbackFailures, originalAvailabilityData } =
            //   updatePensDataError ?? {};
            setSwalConfirmed(true);
            const operation = "deduct";
            const addBookingData = "booking data";
            const rollbackFailures = "id list goes here";
            const originalAvailabilityData = "data goes here";
            dispatch(
              sendEmailCatteryConnectUpdatePensRollbackErrorAsync({
                catteryId,
                operation,
                addBookingData,
                rollbackFailures,
                originalAvailabilityData,
              })
            );
          }
        });
      } else {
        fireSwal(
          "error",
          errorReceivedMessage(
            "there was an error making the booking.",
            updatePensDataError
          ),
          0,
          "",
          false,
          "",
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetUpdatePensDataResult());
            dispatch(resetUpdatePensDataError());
          }
        });
      }
    } else if (
      updatePensDataResult === "fulfilled" &&
      addBookingDataResult === "rejected"
    ) {
      fireSwal(
        "error",
        errorReceivedMessage(
          "pen data was successfully updated but booking was failed to be added the the bookings collection",
          addBookingDataError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdatePensDataResult());
          dispatch(resetUpdatePensDataError());
          dispatch(resetAddBookingDataResult());
          dispatch(resetAddBookingDataError());
          // email admin with details of booking
        }
      });
    }
  }, [
    updatePensDataResult,
    updatePensDataError,
    addBookingDataResult,
    addBookingDataError,
    dispatch,
    fireSwal,
    confirmSwal,
    hamburgerHandlerNavigate,
    // addBookingData,
    catteryId,
    swalConfirmed,
  ]);
};

export default useCompleteBookingResultSwalUseEffect;

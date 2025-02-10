import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import // resetDbManageAddBookingDataError,
// resetDbManageAddBookingDataResult,
// resetDbManageUpdatePensDataError,
// resetDbManageUpdatePensDataResult,
"../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../../strings/errors";
import { accountRoute } from "../../../../strings/routes";
import {
  resetAddBookingDataError,
  resetAddBookingDataResult,
  resetUpdatePensDataError,
  resetUpdatePensDataResult,
} from "../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const useCompleteBookingResultSwalUseEffect = () => {
  const {
    updatePensDataResult,
    updatePensDataError,
    addBookingDataResult,
    addBookingDataError,
  } = useGetDbManageAddBookingSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (
      !updatePensDataResult &&
      !updatePensDataError &&
      !addBookingDataResult &&
      !addBookingDataError
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
      fireSwal(
        "error",
        "error updating pen data",
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
          // roll back pen dates data??
        }
      });
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
  ]);
};

export default useCompleteBookingResultSwalUseEffect;

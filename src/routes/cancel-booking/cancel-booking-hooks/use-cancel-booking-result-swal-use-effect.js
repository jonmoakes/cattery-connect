import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useCancelBookingVariables from "./use-cancel-booking-variables";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { bookingsRoute } from "../../../strings/routes";

const useCancelBookingResultSwalUseEffect = () => {
  const {
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataResult,
    updatePensDataError,
  } = useCancelBookingVariables();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (
      !fetchAvailabilityDocsToUpdateResult &&
      !fetchAvailabilityDocsToUpdateError &&
      !updatePensDataResult &&
      !updatePensDataError &&
      !deleteBookingDataResult &&
      !deleteBookingDataError
    )
      return;

    if (
      updatePensDataResult === "fulfilled" &&
      deleteBookingDataResult === "fulfilled"
    ) {
      fireSwal(
        "success",
        "booking cancelled!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookingsRoute);
        }
      });
    }
  }, [
    dispatch,
    fetchAvailabilityDocsToUpdateResult,
    fetchAvailabilityDocsToUpdateError,
    deleteBookingDataResult,
    deleteBookingDataError,
    updatePensDataResult,
    updatePensDataError,
    fireSwal,
    hamburgerHandlerNavigate,
  ]);
};

export default useCancelBookingResultSwalUseEffect;

import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetUpdatePensDataSelectors from "../hooks/selectors/use-get-update-pens-data-selectors";
import {
  resetUpdatePensDataError,
  resetUpdatePensDataResult,
} from "../store/update-pens-data/update-pens-data.slice";

import useFireSwal from "../hooks/use-fire-swal";

import { errorReceivedMessage } from "../strings/errors";
import { useLocation } from "react-router-dom";
import { addBookingRoute, cancelBookingRoute } from "../strings/routes";

const useUpdatePensErrorSwal = () => {
  const { updatePensDataError } = useGetUpdatePensDataSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const updatePensErrorSwal = useCallback(() => {
    fireSwal(
      "error",
      errorReceivedMessage(
        `there was an error  ${
          path === addBookingRoute
            ? "making"
            : path === cancelBookingRoute && "cancelling"
        } the booking.`,
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
  }, [updatePensDataError, path, fireSwal, dispatch]);

  return { updatePensErrorSwal };
};

export default useUpdatePensErrorSwal;

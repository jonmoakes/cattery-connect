import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../../../hooks/use-fire-swal";
import {
  resetUpdateCheckInOutStatusResult,
  resetUpdateCheckInOutStatusError,
} from "../../../../../store/daily-schedule/daily-schedule.slice";

import { errorReceivedMessage } from "../../../../../strings/errors";

const useUpdateCheckInOutStatusErrorSwal = () => {
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const updateCheckInOutStatusErrorSwal = useCallback(
    (updateCheckInOutStatusError) => {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error updating the status.",
          updateCheckInOutStatusError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateCheckInOutStatusResult());
          dispatch(resetUpdateCheckInOutStatusError());
        }
      });
    },
    [fireSwal, dispatch]
  );

  return { updateCheckInOutStatusErrorSwal };
};

export default useUpdateCheckInOutStatusErrorSwal;

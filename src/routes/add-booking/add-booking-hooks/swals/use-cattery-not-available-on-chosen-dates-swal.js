import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
} from "../../../../store/is-booking-available/is-booking-available.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";
import { catteryNotAvailableOnThisDateString } from "../../../../constants/constants";

const useCatteryNotAvailableOnChosenDatesSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const catteryNotAvailableOnChosenDatesSwal = useCallback(
    (isBookingAvailableError) => {
      fireSwal(
        "error",
        isBookingAvailableError.includes(catteryNotAvailableOnThisDateString)
          ? isBookingAvailableError
          : errorReceivedMessage(
              "Error checking date availability.",
              isBookingAvailableError
            ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetIsBookingAvailableResult());
          dispatch(resetIsBookingAvailableError());
        }
      });
    },
    [dispatch, fireSwal]
  );

  return { catteryNotAvailableOnChosenDatesSwal };
};

export default useCatteryNotAvailableOnChosenDatesSwal;

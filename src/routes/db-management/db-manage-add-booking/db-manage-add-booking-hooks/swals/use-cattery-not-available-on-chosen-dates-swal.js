import { useDispatch } from "react-redux";

import {
  resetIsBookingAvailableError,
  resetIsBookingAvailableResult,
} from "../../../../../store/db-manage-add-booking/db-manage-add-booking.slice";

import useFireSwal from "../../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../../strings/errors";

const useCatteryNotAvailableOnChosenDatesSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const catteryNotAvailableOnChosenDatesSwal = (isBookingAvailableError) => {
    fireSwal(
      "error",
      isBookingAvailableError.includes(
        "we are not able to make this booking because the cattery is not available for bookings on the following dates:"
      )
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
  };

  return { catteryNotAvailableOnChosenDatesSwal };
};

export default useCatteryNotAvailableOnChosenDatesSwal;

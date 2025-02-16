import { useEffect } from "react";

import useGetIsBookingAvailableSelectors from "../../../../../hooks/selectors/use-get-is-booking-available-selectors";

import useCatteryNotAvailableOnChosenDatesSwal from "../swals/use-cattery-not-available-on-chosen-dates-swal";

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const { isBookingAvailableResult, isBookingAvailableError, status } =
    useGetIsBookingAvailableSelectors();

  const { catteryNotAvailableOnChosenDatesSwal } =
    useCatteryNotAvailableOnChosenDatesSwal();

  useEffect(() => {
    if (
      (!isBookingAvailableResult && !isBookingAvailableError) ||
      status === "bookingAvailable"
    )
      return;

    if (isBookingAvailableResult === "rejected") {
      catteryNotAvailableOnChosenDatesSwal(isBookingAvailableError);
    }
  }, [
    isBookingAvailableResult,
    isBookingAvailableError,
    catteryNotAvailableOnChosenDatesSwal,
    status,
  ]);
};

export default useCheckBookingAvailableResultSwalUseEffect;

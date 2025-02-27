import { useEffect } from "react";

import useGetIsBookingAvailableSelectors from "../../../../hooks/selectors/use-get-is-booking-available-selectors";

import useCatteryNotAvailableOnChosenDatesSwal from "../swals/use-cattery-not-available-on-chosen-dates-swal";

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const {
    isBookingAvailableResult,
    isBookingAvailableError,
    availabilityStatus,
  } = useGetIsBookingAvailableSelectors();

  const { catteryNotAvailableOnChosenDatesSwal } =
    useCatteryNotAvailableOnChosenDatesSwal();

  useEffect(() => {
    if (
      (!isBookingAvailableResult && !isBookingAvailableError) ||
      availabilityStatus === "bookingAvailable"
    )
      return;

    if (isBookingAvailableResult === "rejected") {
      catteryNotAvailableOnChosenDatesSwal(isBookingAvailableError);
    }
  }, [
    isBookingAvailableResult,
    isBookingAvailableError,
    catteryNotAvailableOnChosenDatesSwal,
    availabilityStatus,
  ]);
};

export default useCheckBookingAvailableResultSwalUseEffect;

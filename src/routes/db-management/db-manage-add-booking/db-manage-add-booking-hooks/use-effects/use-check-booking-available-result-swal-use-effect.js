import { useEffect } from "react";
import useGetDbManageAddBookingSelectors from "../../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useCatteryNotAvailableOnChosenDatesSwal from "../swals/use-cattery-not-available-on-chosen-dates-swal";

const useCheckBookingAvailableResultSwalUseEffect = () => {
  const { isBookingAvailableResult, isBookingAvailableError, status } =
    useGetDbManageAddBookingSelectors();

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

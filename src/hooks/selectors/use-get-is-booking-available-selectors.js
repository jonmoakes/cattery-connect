import { useSelector } from "react-redux";

import { selectIsBookingAvailableSelectors } from "../../store/is-booking-available/is-booking-available.slice";

const useGetIsBookingAvailableSelectors = () => {
  const {
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
  } = useSelector(selectIsBookingAvailableSelectors);

  const { status, failingDates, parsedAvailabilityData } =
    isBookingAvailableResult ?? {};

  return {
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
    status,
    failingDates,
    parsedAvailabilityData,
  };
};

export default useGetIsBookingAvailableSelectors;

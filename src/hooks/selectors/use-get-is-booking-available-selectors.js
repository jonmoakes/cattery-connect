import { useSelector } from "react-redux";

import { selectIsBookingAvailableSelectors } from "../../store/is-booking-available/selectors";

const useGetIsBookingAvailableSelectors = () => {
  const {
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
  } = useSelector(selectIsBookingAvailableSelectors);

  const { availabilityStatus, failingDates, parsedAvailabilityData } =
    isBookingAvailableResult ?? {};

  return {
    isBookingAvailableIsLoading,
    isBookingAvailableResult,
    isBookingAvailableError,
    showIneligibleDates,
    availabilityStatus,
    failingDates,
    parsedAvailabilityData,
  };
};

export default useGetIsBookingAvailableSelectors;

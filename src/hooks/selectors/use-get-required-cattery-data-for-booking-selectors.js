import { useSelector } from "react-redux";

import { selectRequiredCatteryDataForBookingSelectors } from "../../store/required-cattery-data/required-cattery-data-for-booking.slice";

const useGetRequiredCatteryDataForBookingSelectors = () => {
  const {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
  } = useSelector(selectRequiredCatteryDataForBookingSelectors);

  const {
    catteryAllowsLargerPensBool,
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    email: catteryEmail,
  } = requiredCatteryData ?? {};

  return {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
    catteryAllowsLargerPensBool,
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    catteryEmail,
  };
};

export default useGetRequiredCatteryDataForBookingSelectors;

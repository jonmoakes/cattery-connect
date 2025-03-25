import { useSelector } from "react-redux";

import { selectRequiredCatteryDataForBookingSelectors } from "../../store/required-cattery-data/selectors";

const useGetRequiredCatteryDataForBookingSelectors = () => {
  const {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
  } = useSelector(selectRequiredCatteryDataForBookingSelectors);

  const {
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    email: catteryEmail,
    managesOwnPens,
  } = requiredCatteryData ?? {};

  return {
    requiredCatteryDataIsLoading,
    requiredCatteryData,
    requiredCatteryDataResult,
    requiredCatteryDataError,
    maximumCatsInSinglePen,
    pricePerNight,
    name,
    phone,
    catteryEmail,
    managesOwnPens,
  };
};

export default useGetRequiredCatteryDataForBookingSelectors;

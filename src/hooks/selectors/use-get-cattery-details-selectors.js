import { useSelector } from "react-redux";
import { selectCatteryDetailsSelectors } from "../../store/cattery-details/selectors";

const useGetCatteryDetailsSelectors = () => {
  const {
    catteryDetailsIsLoading,
    catteryDetailsResult,
    catteryDetails,
    catteryDetailsError,
  } = useSelector(selectCatteryDetailsSelectors);

  const {
    name,
    address,
    phone,
    email,
    website,
    hasAdditionalCosts,
    managesOwnPens,
    allowsOnlinePayments,
    pricesPerNight,
    maximumCatsInSinglePen,
    chargesByDay,
  } = catteryDetails ?? {};

  const catteryDetailsFoUi = {
    name,
    address,
    phone,
    email,
    website,
  };

  const pricingArray = pricesPerNight
    ? JSON.parse(pricesPerNight)
    : pricesPerNight;

  return {
    catteryDetailsIsLoading,
    catteryDetailsResult,
    catteryDetailsError,
    catteryDetailsFoUi,
    name,
    address,
    phone,
    email,
    website,
    hasAdditionalCosts,
    managesOwnPens,
    allowsOnlinePayments,
    pricesPerNight,
    pricingArray,
    maximumCatsInSinglePen,
    chargesByDay,
  };
};

export default useGetCatteryDetailsSelectors;

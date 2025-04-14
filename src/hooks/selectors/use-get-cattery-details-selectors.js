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
    managesOwnPens,
    allowsOnlinePayments,
    pricesPerNight,
    maximumCatsInSinglePen,
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
    managesOwnPens,
    allowsOnlinePayments,
    pricingArray,
    maximumCatsInSinglePen,
  };
};

export default useGetCatteryDetailsSelectors;

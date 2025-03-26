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
    pricePerNight,
    managesOwnPens,
    allowsOnlinePayments,
  } = catteryDetails ?? {};

  const catteryDetailsFoUi = {
    name,
    address,
    phone,
    email,
    website,
    pricePerNight,
  };

  return {
    catteryDetailsIsLoading,
    catteryDetailsResult,
    catteryDetailsError,
    catteryDetailsFoUi,
    managesOwnPens,
    allowsOnlinePayments,
  };
};

export default useGetCatteryDetailsSelectors;

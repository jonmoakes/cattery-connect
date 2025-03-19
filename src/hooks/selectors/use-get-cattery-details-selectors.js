import { useSelector } from "react-redux";
import { selectCatteryDetailsSelectors } from "../../store/cattery-details/selectors";

const useGetCatteryDetailsSelectors = () => {
  const {
    catteryDetailsIsLoading,
    catteryDetailsResult,
    catteryDetails,
    catteryDetailsError,
  } = useSelector(selectCatteryDetailsSelectors);

  const { name, address, phone, email, website, pricePerNight } =
    catteryDetails ?? {};

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
  };
};

export default useGetCatteryDetailsSelectors;

import { useSelector } from "react-redux";

import { selectUpdatePriceSelectors } from "../../store/update-price/selectors";

const useGetUpdatePriceSelectors = () => {
  const {
    updatePriceIsLoading,
    updatePriceResult,
    updatePriceError,
    newPricingArray,
  } = useSelector(selectUpdatePriceSelectors);

  return {
    updatePriceIsLoading,
    updatePriceResult,
    updatePriceError,
    newPricingArray,
  };
};

export default useGetUpdatePriceSelectors;

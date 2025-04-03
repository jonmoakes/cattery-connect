import { useSelector } from "react-redux";

import { selectUpdatePriceSelectors } from "../../store/update-price/selectors";

const useGetUpdatePriceSelectors = () => {
  const {
    updatePriceIsLoading,
    updatePriceResult,
    updatePriceError,
    newPrice,
  } = useSelector(selectUpdatePriceSelectors);

  return {
    updatePriceIsLoading,
    updatePriceResult,
    updatePriceError,
    newPrice,
  };
};

export default useGetUpdatePriceSelectors;

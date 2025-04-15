import { useDispatch } from "react-redux";

import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";
import { setNewPricingArray } from "../../../store/update-price/update-price-slice";

const useHandleNewPriceChange = () => {
  const { newPricingArray } = useGetUpdatePriceSelectors();
  const dispatch = useDispatch();

  const handleNewPriceChange = (e) => {
    const numberOfCats = Number(e.target.name);
    const newPrice = Number(e.target.value);

    const updatedArray = newPricingArray.map((item) =>
      item.numberOfCats === numberOfCats ? { ...item, price: newPrice } : item
    );

    dispatch(setNewPricingArray(updatedArray));
  };

  return { handleNewPriceChange };
};

export default useHandleNewPriceChange;

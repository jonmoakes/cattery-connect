import { useDispatch } from "react-redux";

import { setNewPrice } from "../../../store/update-price/update-price-slice";

const useHandleNewPriceChange = () => {
  const dispatch = useDispatch();

  const handleNewPriceChange = (event) => {
    dispatch(setNewPrice(event.target.value));
  };

  return { handleNewPriceChange };
};

export default useHandleNewPriceChange;

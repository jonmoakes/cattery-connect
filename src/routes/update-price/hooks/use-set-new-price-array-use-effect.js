import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";

import { setNewPricingArray } from "../../../store/update-price/update-price-slice";

const useSetNewPriceArrayUseEffect = () => {
  const { newPricingArray } = useGetUpdatePriceSelectors();
  const { pricingArray } = useGetCatteryDetailsSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (newPricingArray && newPricingArray.length) return;
    dispatch(setNewPricingArray(pricingArray));
  }, [pricingArray, newPricingArray, dispatch]);
};

export default useSetNewPriceArrayUseEffect;

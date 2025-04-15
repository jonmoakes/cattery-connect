import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import useGetUpdatePriceSelectors from "../../../hooks/selectors/use-get-update-price-selectors";

const useUpdatePriceLogic = () => {
  const { pricingArray } = useGetCatteryDetailsSelectors();
  const { newPricingArray } = useGetUpdatePriceSelectors();

  const getCatsTailString = (numberOfCats) => {
    return numberOfCats === 1 ? "cat" : "cats";
  };

  const pricesHaventChanged =
    JSON.stringify(pricingArray) === JSON.stringify(newPricingArray);

  const newPricingArrayExists = newPricingArray && newPricingArray.length;

  return { getCatsTailString, pricesHaventChanged, newPricingArrayExists };
};

export default useUpdatePriceLogic;

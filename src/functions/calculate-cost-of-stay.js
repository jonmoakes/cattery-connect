export const calculatePrice = (
  pricingArray,
  numberOfCatsInBooking,
  additionalCosts,
  lengthOfStay
) => {
  if (pricingArray === undefined) return null;

  const priceInfo = pricingArray.find(
    (priceInfo) => priceInfo.numberOfCats === numberOfCatsInBooking
  );

  if (priceInfo) {
    const totalPrice = additionalCosts
      ? priceInfo.price * lengthOfStay + additionalCosts
      : priceInfo.price * lengthOfStay;

    return totalPrice;
  } else {
    return "missing data";
  }
};

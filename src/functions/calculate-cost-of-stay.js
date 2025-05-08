export const calculatePrice = (
  pricingArray,
  numberOfCatsInBooking,
  chargesByDay,
  lengthOfStay,
  additionalCosts
) => {
  if (pricingArray === undefined) return null;

  const priceInfo = pricingArray.find(
    (priceInfo) => priceInfo.numberOfCats === numberOfCatsInBooking
  );

  if (priceInfo) {
    const adjustedLengthOfStay = chargesByDay ? lengthOfStay + 1 : lengthOfStay;
    const totalPrice = additionalCosts
      ? priceInfo.price * adjustedLengthOfStay + additionalCosts
      : priceInfo.price * adjustedLengthOfStay;

    return totalPrice;
  } else {
    return "missing data";
  }
};

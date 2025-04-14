export const calculatePrice = (
  pricingArray,
  numberOfCatsInBooking,
  lengthOfStay
) => {
  if (pricingArray === undefined) return null;

  const priceInfo = pricingArray.find(
    (priceInfo) => priceInfo.numberOfCats === numberOfCatsInBooking
  );

  if (priceInfo) {
    const totalPrice = priceInfo.price * lengthOfStay;
    return totalPrice;
  } else {
    return "missing data";
  }
};

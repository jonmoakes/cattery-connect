import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

const useAddBookingVariables = () => {
  const { customerName, catDetails, catsInBooking, maximumCatsInSinglePen } =
    useGetDbManageAddBookingSelectors();

  let parsedCatDetails = [];
  let error = null;

  try {
    parsedCatDetails = catDetails ? JSON.parse(catDetails) : [];
  } catch (err) {
    error = `Invalid JSON format in catDetails: ${err.message}`;
  }

  const catsToRender =
    parsedCatDetails?.map((parsedCat) => ({
      catsId: parsedCat.catsId,
      catsName: parsedCat.catsName,
    })) || [];

  const noCustomerSelectedYet =
    customerName === undefined && catDetails === undefined;

  const customerSelectedThenDefaultValueSelected =
    !customerName && !catDetails && catsToRender.length === 0;

  const customerHasBeenSelectedAndErrorParsingCats = !!customerName && !!error;

  const customerHasBeenSelectedAndHasAtLeastOneCat =
    !!customerName && !!catDetails && catsToRender.length > 0;

  const customerHasOneCat = catsToRender && catsToRender.length === 1;

  const customerHasMoreThanOneCat = catsToRender && catsToRender.length > 1;

  const customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected =
    customerHasOneCat ||
    (customerHasMoreThanOneCat &&
      Array.isArray(catsInBooking) &&
      catsInBooking.length > 0);

  const numberOfCatsInBooking = catsInBooking ? catsInBooking.length : 0;

  const moreCatsInBookingThanCapacityInOnePen =
    numberOfCatsInBooking > maximumCatsInSinglePen;

  return {
    catsToRender,
    error,
    noCustomerSelectedYet,
    customerSelectedThenDefaultValueSelected,
    customerHasBeenSelectedAndErrorParsingCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
    customerHasOneCat,
    customerHasMoreThanOneCat,
    customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected,
    numberOfCatsInBooking,
    moreCatsInBookingThanCapacityInOnePen,
    maximumCatsInSinglePen,
  };
};

export default useAddBookingVariables;

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

const useCustomersCatsLogic = () => {
  const { customerName, catDetails, catsInBooking } =
    useGetDbManageAddBookingSelectors();

  let parsedCatDetails = [];
  let error = null;

  try {
    parsedCatDetails = catDetails ? JSON.parse(catDetails) : [];
  } catch (err) {
    error = `Invalid JSON format in catDetails: ${err}`;
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

  const customerHasBeenSelectedAndHasNoCats =
    !!customerName && !!catDetails && catsToRender.length === 0;

  const customerHasBeenSelectedAndHasAtLeastOneCat =
    !!customerName && !!catDetails && catsToRender.length > 0;

  const customerHasOneCat = catsToRender && catsToRender.length === 1;

  const customerHasMoreThanOneCat = catsToRender && catsToRender.length > 1;

  const customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected =
    customerHasOneCat ||
    (customerHasMoreThanOneCat &&
      Array.isArray(catsInBooking) &&
      catsInBooking.length > 0);

  return {
    catsToRender,
    error,
    noCustomerSelectedYet,
    customerSelectedThenDefaultValueSelected,
    customerHasBeenSelectedAndErrorParsingCats,
    customerHasBeenSelectedAndHasNoCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
    customerHasOneCat,
    customerHasMoreThanOneCat,
    customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected,
  };
};

export default useCustomersCatsLogic;

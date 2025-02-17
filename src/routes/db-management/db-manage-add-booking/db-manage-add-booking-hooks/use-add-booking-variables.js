import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetUploadBookingDataSelectors from "../../../../hooks/selectors/use-get-upload-booking-data-selectors";

const useAddBookingVariables = () => {
  const {
    customerName,
    catDetails,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = useGetUploadBookingDataSelectors();
  const { maximumCatsInSinglePen, requiredCatteryDataError } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { status } = useGetIsBookingAvailableSelectors();
  const { getAllCustomersError } = useGetAllCustomerSelectors();

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

  const bookingDataToShow = {
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  };

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
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    requiredCatteryDataError,
    status,
    getAllCustomersError,
    bookingDataToShow,
  };
};

export default useAddBookingVariables;

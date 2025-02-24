import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";

const useAddBookingVariables = () => {
  const {
    customerName,
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
  const { individualCustomersCats, individualCustomersCatsError } =
    useGetIndividualCustomersCatsSelectors();

  const catsToRender = individualCustomersCats
    ? individualCustomersCats.map((cat) => ({
        catsId: cat.catsId,
        catsName: cat.catsName,
      }))
    : undefined;

  const noCustomerSelectedYet = customerName === undefined;
  const customerHasBeenSelectedAndHasNoAddedCats =
    customerName && catsToRender && catsToRender.length === 0;

  const customerHasBeenSelectedAndHasAtLeastOneCat =
    customerName && catsToRender && catsToRender.length > 0;
  const customerHasOneCat = catsToRender && catsToRender.length === 1;

  const customerHasMoreThanOneCat = catsToRender && catsToRender.length > 1;

  const atLeastOneCatHasBeenSelected =
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
    requiredCatteryDataError,
    getAllCustomersError,
    individualCustomersCatsError,
    status,
    moreCatsInBookingThanCapacityInOnePen,
    numberOfCatsInBooking,
    maximumCatsInSinglePen,
    atLeastOneCatHasBeenSelected,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    bookingDataToShow,
    catsToRender,
    noCustomerSelectedYet,
    customerHasBeenSelectedAndHasNoAddedCats,
    customerHasBeenSelectedAndHasAtLeastOneCat,
    customerHasOneCat,
    customerHasMoreThanOneCat,
    individualCustomersCats,
  };
};

export default useAddBookingVariables;

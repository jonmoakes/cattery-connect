import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";

const useAddBookingVariables = () => {
  const { individualCustomersCats } = useGetIndividualCustomersCatsSelectors();
  const {
    customerDocumentId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  } = useGetUploadBookingDataSelectors();
  const { maximumCatsInSinglePen } =
    useGetRequiredCatteryDataForBookingSelectors();

  const customersCats = individualCustomersCats
    ? individualCustomersCats.map((cat) => ({
        catsId: cat.catsId,
        catsName: cat.catsName,
      }))
    : undefined;

  const customerHasOneCat = customersCats && customersCats.length === 1;
  const customerHasMoreThanOneCat = customersCats && customersCats.length > 1;

  const atLeastOneCatHasBeenSelected =
    customerHasOneCat ||
    (customerHasMoreThanOneCat &&
      Array.isArray(catsInBooking) &&
      catsInBooking.length > 0);

  const numberOfCatsInBooking = catsInBooking ? catsInBooking.length : 0;

  const moreCatsInBookingThanCapacityInOnePen =
    numberOfCatsInBooking > maximumCatsInSinglePen;

  const shouldShowFormSubmissionButtons =
    !moreCatsInBookingThanCapacityInOnePen &&
    customerDocumentId &&
    customerName &&
    catsInBooking &&
    checkInDate &&
    checkInSlot &&
    checkOutDate &&
    checkOutSlot &&
    paymentStatus &&
    true;

  const bookingDataToShow = {
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  };

  return {
    moreCatsInBookingThanCapacityInOnePen,
    atLeastOneCatHasBeenSelected,
    shouldShowFormSubmissionButtons,
    bookingDataToShow,
    numberOfCatsInBooking,
    customersCats,
    customerHasOneCat,
    customerHasMoreThanOneCat,
  };
};

export default useAddBookingVariables;

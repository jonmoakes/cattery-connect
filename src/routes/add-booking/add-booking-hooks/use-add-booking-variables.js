import useGetRequiredCatteryDataForBookingSelectors from "../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";

const useAddBookingVariables = () => {
  const { requiredCatteryDataError, managesOwnPens } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { getAllCustomersError, atLeastOneCustomerExists } =
    useGetAllCustomerSelectors();
  const { individualCustomersCatsError, individualCustomersCats } =
    useGetIndividualCustomersCatsSelectors();
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
  const { availabilityStatus, failingDates, showIneligibleDates } =
    useGetIsBookingAvailableSelectors();

  const hasErrors =
    requiredCatteryDataError ||
    getAllCustomersError ||
    individualCustomersCatsError;

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

  const bookingNotAvailableAndHasFailingDates =
    availabilityStatus === "bookingNotAvailable" &&
    failingDates &&
    failingDates.length;

  const bookingNotAvailableAndNoFailingDates =
    availabilityStatus === "bookingNotAvailable" && !failingDates;

  return {
    hasErrors,
    atLeastOneCustomerExists,
    availabilityStatus,
    numberOfCatsInBooking,
    maximumCatsInSinglePen,
    moreCatsInBookingThanCapacityInOnePen,
    atLeastOneCatHasBeenSelected,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
    shouldShowFormSubmissionButtons,
    bookingDataToShow,
    managesOwnPens,
    bookingNotAvailableAndHasFailingDates,
    showIneligibleDates,
    failingDates,
    bookingNotAvailableAndNoFailingDates,
    customerHasOneCat,
    customersCats,
    customerHasMoreThanOneCat,
  };
};

export default useAddBookingVariables;

import useGetUploadBookingDataSelectors from "../../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIndividualCustomersCatsSelectors from "../../../hooks/selectors/use-get-individual-customers-cats-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";
import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";
import useGetCatteryDetailsSelectors from "../../../hooks/selectors/use-get-cattery-details-selectors";
import { calculatePrice } from "../../../functions/calculate-cost-of-stay";
import { differenceInDays } from "date-fns";

const useAddBookingVariables = () => {
  const {
    catteryDetailsError,
    hasAdditionalCosts,
    managesOwnPens,
    maximumCatsInSinglePen,
    pricingArray,
    chargesByDay,
  } = useGetCatteryDetailsSelectors();
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
    additionalCosts,
  } = useGetUploadBookingDataSelectors();
  const { availabilityStatus, failingDates, showIneligibleDates } =
    useGetIsBookingAvailableSelectors();

  const hasErrors =
    catteryDetailsError || getAllCustomersError || individualCustomersCatsError;

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
  const lengthOfStay = differenceInDays(checkOutDate, checkInDate);
  const totalCost = calculatePrice(
    pricingArray,
    numberOfCatsInBooking,
    chargesByDay,
    lengthOfStay,
    Number(additionalCosts)
  );

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
    totalCost,
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
    hasAdditionalCosts,
    bookingNotAvailableAndHasFailingDates,
    showIneligibleDates,
    failingDates,
    bookingNotAvailableAndNoFailingDates,
    customerHasOneCat,
    customersCats,
    customerHasMoreThanOneCat,
    totalCost,
    additionalCosts,
  };
};

export default useAddBookingVariables;

import useHandleCustomerSelectChange from "../../components/customer-select-drop-down/customer-select-dropdown-hooks/use-handle-customer-select-change";
import useAddBookingVariables from "./add-booking-hooks/use-add-booking-variables";
import useCheckBookingAvailability from "./add-booking-hooks/use-check-booking-availability";
import useConfirmPlaceBooking from "./add-booking-hooks/use-confirm-place-booking";
import useHandleChangeDetailsRequest from "./add-booking-hooks/use-handle-change-details-request";
import useCheckInAndOutDateValidityUseEffect from "./add-booking-hooks/use-effects/use-check-in-and-out-date-validity-use-effect";
import useCheckBookingAvailableResultSwalUseEffect from "./add-booking-hooks/use-effects/use-check-booking-available-result-swal-use-effect";
import useGetCatteryDataAndCustomersThunkUseEffect from "./add-booking-hooks/use-effects/use-get-cattery-data-and-customers-thunk-use-effect";
import useCompleteBookingResultSwalUseEffect from "./add-booking-hooks/use-effects/use-complete-booking-result-swal-use-effect";
import useSendEmailResultSwalUseEffect from "./add-booking-hooks/use-effects/use-send-email-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoCustomersFound from "../../components/no-customers-found/no-customers-found.component";
import AddBookingTitleAndLoader from "./ui/add-booking-title-and-loader.component";
import BookingFormSection from "./ui/booking-form-section.component";
import FormButtonsAndAvailabilityInfoSection from "./ui/form-buttons-and-availability-info-section.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const AddBooking = () => {
  const {
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
    totalCost,
    shouldShowFormSubmissionButtons,
    bookingDataToShow,
    hasAdditionalCosts,
    additionalCosts,
    managesOwnPens,
    bookingNotAvailableAndHasFailingDates,
    showIneligibleDates,
    failingDates,
    bookingNotAvailableAndNoFailingDates,
  } = useAddBookingVariables();
  const { checkBookingAvailability } = useCheckBookingAvailability();
  const { handleCustomerSelectChange } = useHandleCustomerSelectChange();
  const { confirmPlaceBooking } = useConfirmPlaceBooking();
  const { handleChangeDetailsRequest } = useHandleChangeDetailsRequest();

  useGetCatteryDataAndCustomersThunkUseEffect();
  useCheckInAndOutDateValidityUseEffect();
  useCheckBookingAvailableResultSwalUseEffect();
  const { noAvailabilityRef, bookingIsAvailableRef } =
    useCheckBookingAvailableResultSwalUseEffect();
  useCompleteBookingResultSwalUseEffect();
  useSendEmailResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Add Booking"
        description="Create a new booking for your cattery. Easily add customer details, cat information, and reservation dates."
      />
      <AddBookingTitleAndLoader />

      {hasErrors ? (
        <ShowFetchErrors />
      ) : !atLeastOneCustomerExists ? (
        <NoCustomersFound />
      ) : (
        <ParentDiv>
          <Form onSubmit={checkBookingAvailability}>
            {availabilityStatus === "bookingAvailable" ? null : (
              <BookingFormSection
                {...{
                  handleCustomerSelectChange,
                  numberOfCatsInBooking,
                  maximumCatsInSinglePen,
                  moreCatsInBookingThanCapacityInOnePen,
                  atLeastOneCatHasBeenSelected,
                  checkInDate,
                  checkInSlot,
                  checkOutDate,
                  checkOutSlot,
                  paymentStatus,
                }}
              />
            )}

            {shouldShowFormSubmissionButtons ? (
              <FormButtonsAndAvailabilityInfoSection
                {...{
                  totalCost,
                  bookingDataToShow,
                  hasAdditionalCosts,
                  additionalCosts,
                  managesOwnPens,
                  noAvailabilityRef,
                  bookingNotAvailableAndHasFailingDates,
                  showIneligibleDates,
                  failingDates,
                  bookingNotAvailableAndNoFailingDates,
                  availabilityStatus,
                  bookingIsAvailableRef,
                  confirmPlaceBooking,
                  handleChangeDetailsRequest,
                }}
              />
            ) : null}
          </Form>
        </ParentDiv>
      )}
    </Container>
  );
};

export default AddBooking;

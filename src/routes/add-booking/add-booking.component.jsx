import useGetRequiredCatteryDataForBookingSelectors from "../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useGetAllCustomerSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetIndividualCustomersCatsSelectors from "../../hooks/selectors/use-get-individual-customers-cats-selectors";
import useGetUploadBookingDataSelectors from "../../hooks/selectors/use-get-upload-booking-data-selectors";
import useGetIsBookingAvailableSelectors from "../../hooks/selectors/use-get-is-booking-available-selectors";

import useAddBookingVariables from "./add-booking-hooks/use-add-booking-variables";
import useCheckBookingAvailability from "./add-booking-hooks/use-check-booking-availability";
import useCheckInAndOutDateValidityUseEffect from "./add-booking-hooks/use-effects/use-check-in-and-out-date-validity-use-effect";
import useCheckBookingAvailableResultSwalUseEffect from "./add-booking-hooks/use-effects/use-check-booking-available-result-swal-use-effect";
import useGetRequiredCatteryDataAndCustomersThunkUseEffect from "./add-booking-hooks/use-effects/use-get-required-cattery-data-and-customers-thunk-use-effect";
import useCompleteBookingResultSwalUseEffect from "./add-booking-hooks/use-effects/use-complete-booking-result-swal-use-effect";
import useSendEmailResultSwalUseEffect from "./add-booking-hooks/use-effects/use-send-email-result-swal-use-effect";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import AddBookingTitleAndLoader from "./ui/add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";
import MoreCatsSelectedThanSinglePenCapacity from "./ui/more-cats-selected-than-single-pen-capacity.component";
import CheckInAndOutDateInput from "./inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";
import CheckInAndOutTimeSlotSelectInput from "./inputs/check-in-out-and-time-slot-input/check-in-and-out-time-slot.component";
import PaymentStatusSelectInput from "./inputs/payment-status-select-input.component";
import ShowBookingData from "../../components/show-booking-data/show-booking-data.component";
import FailedDatesInfo from "./ui/failed-dates-info.component";
import CheckAvailabilityButton from "./ui/check-availability-button.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./ui/booking-is-available-info-and-place-booking-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const AddBooking = () => {
  const { requiredCatteryDataError } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { getAllCustomersError } = useGetAllCustomerSelectors();
  const { individualCustomersCatsError } =
    useGetIndividualCustomersCatsSelectors();
  const {
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  } = useGetUploadBookingDataSelectors();
  const { availabilityStatus } = useGetIsBookingAvailableSelectors();

  const { checkBookingAvailability } = useCheckBookingAvailability();
  const {
    moreCatsInBookingThanCapacityInOnePen,
    atLeastOneCatHasBeenSelected,
    bookingDataToShow,
    shouldShowFormSubmissionButtons,
  } = useAddBookingVariables();

  useGetRequiredCatteryDataAndCustomersThunkUseEffect();
  useCheckInAndOutDateValidityUseEffect();
  useCheckBookingAvailableResultSwalUseEffect();
  useCompleteBookingResultSwalUseEffect();
  useSendEmailResultSwalUseEffect();

  return (
    <Container>
      <AddBookingTitleAndLoader />

      {requiredCatteryDataError ||
      getAllCustomersError ||
      individualCustomersCatsError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <Form onSubmit={checkBookingAvailability}>
            {availabilityStatus ===
            "bookingAvailable" ? null : moreCatsInBookingThanCapacityInOnePen ? (
              <>
                <ChooseCustomerSelectInput />
                <ChooseCatsInput />
                <MoreCatsSelectedThanSinglePenCapacity />
              </>
            ) : (
              <>
                <ChooseCustomerSelectInput />
                <ChooseCatsInput />

                <CheckInAndOutDateInput
                  dateType="checkInDate"
                  condition={atLeastOneCatHasBeenSelected}
                  selectedDate={checkInDate}
                />

                <CheckInAndOutTimeSlotSelectInput
                  slotType="checkInSlot"
                  checkInSlot={checkInSlot}
                  checkOutSlot={checkOutSlot}
                  condition={checkInDate}
                  showHr={checkInDate}
                />
                <CheckInAndOutDateInput
                  dateType="checkOutDate"
                  condition={atLeastOneCatHasBeenSelected && checkInSlot}
                  selectedDate={checkOutDate}
                />
                <CheckInAndOutTimeSlotSelectInput
                  slotType="checkOutSlot"
                  checkInSlot={checkInSlot}
                  checkOutSlot={checkOutSlot}
                  condition={checkOutDate}
                  showHr={checkOutDate}
                />

                <PaymentStatusSelectInput
                  condition={checkOutSlot}
                  paymentStatus={paymentStatus}
                />
              </>
            )}

            {shouldShowFormSubmissionButtons ? (
              <>
                <ShowBookingData {...{ bookingDataToShow }} />
                <FailedDatesInfo />
                <CheckAvailabilityButton />
                <BookingIsAvailableInfoAndPlaceBookingButton />
              </>
            ) : null}
          </Form>
        </ParentDiv>
      )}
    </Container>
  );
};

export default AddBooking;

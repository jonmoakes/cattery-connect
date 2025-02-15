import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useGetAllCustomerSelectors from "../../../hooks/selectors/use-get-all-customers-selectors";

import useAddBookingFunctions from "./db-manage-add-booking-hooks/use-add-booking-functions";
import useAddBookingVariables from "./db-manage-add-booking-hooks/use-add-booking-variables";
import useCheckInAndOutDateValidityUseEffect from "./db-manage-add-booking-hooks/use-effects/use-check-in-and-out-date-validity-use-effect";
import useCheckBookingAvailableResultSwalUseEffect from "./db-manage-add-booking-hooks/use-effects/use-check-booking-available-result-swal-use-effect";
import useGetRequiredCatteryDataThunkUseEffect from "./db-manage-add-booking-hooks/use-effects/use-get-required-cattery-data-thunk-use-effect";
import useCompleteBookingResultSwalUseEffect from "./db-manage-add-booking-hooks/use-effects/use-complete-booking-result-swal-use-effect";
import useSendEmailResultSwalUseEffect from "./db-manage-add-booking-hooks/use-effects/use-send-email-result-swal-use-effect";

import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import DbManageAddBookingTitleAndLoader from "./ui/db-manage-add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";
import MoreCatsSelectedThanSinglePenCapacity from "./ui/more-cats-selected-than-single-pen-capacity.component";
import CheckInAndOutDateInput from "./inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";
import CheckInAndOutTimeSlotSelectInput from "./inputs/check-in-out-and-time-slot-input/check-in-and-out-time-slot.component";
import ShowBookingDataBeforeBooking from "./ui/show-booking-data-before-booking.component";
import FailedDatesInfo from "./ui/failed-dates-info.component";
import CheckAvailabilityButton from "./ui/check-availability-button.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./ui/booking-is-available-info-and-place-booking-button.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";

const DbManageAddBooking = () => {
  const {
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    catteryAllowsLargerPensError,
    status,
  } = useGetDbManageAddBookingSelectors();
  const { getAllCustomersError } = useGetAllCustomerSelectors();
  const {
    customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected,
    moreCatsInBookingThanCapacityInOnePen,
    numberOfCatsInBooking,
    maximumCatsInSinglePen,
  } = useAddBookingVariables();
  const { shouldShowFormSubmissionButtons, checkBookingAvailability } =
    useAddBookingFunctions();

  useGetRequiredCatteryDataThunkUseEffect();
  useCheckInAndOutDateValidityUseEffect();
  useCheckBookingAvailableResultSwalUseEffect();
  useCompleteBookingResultSwalUseEffect();
  useSendEmailResultSwalUseEffect();

  return (
    <Container>
      <DbManageAddBookingTitleAndLoader />

      {catteryAllowsLargerPensError || getAllCustomersError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <Form onSubmit={checkBookingAvailability}>
            {status ===
            "bookingAvailable" ? null : moreCatsInBookingThanCapacityInOnePen ? (
              <>
                <ChooseCustomerSelectInput />
                <ChooseCatsInput />
                <MoreCatsSelectedThanSinglePenCapacity
                  {...{ numberOfCatsInBooking, maximumCatsInSinglePen }}
                />
              </>
            ) : (
              <>
                <ChooseCustomerSelectInput />
                <ChooseCatsInput />

                <CheckInAndOutDateInput
                  dateType="checkInDate"
                  condition={
                    customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected
                  }
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
                  condition={
                    customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected &&
                    checkInSlot
                  }
                  selectedDate={checkOutDate}
                />
                <CheckInAndOutTimeSlotSelectInput
                  slotType="checkOutSlot"
                  checkInSlot={checkInSlot}
                  checkOutSlot={checkOutSlot}
                  condition={checkOutDate}
                  showHr={checkOutDate}
                />
              </>
            )}

            {shouldShowFormSubmissionButtons ? (
              <>
                <ShowBookingDataBeforeBooking />
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

export default DbManageAddBooking;

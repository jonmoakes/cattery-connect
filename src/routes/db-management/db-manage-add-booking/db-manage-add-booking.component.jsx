import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useAddBookingVariables from "./db-manage-add-booking-hooks/use-add-booking-variables";
import useCheckInAndOutDateValidityUseEffect from "./db-manage-add-booking-hooks/use-check-in-and-out-date-validity-use-effect";
import useCheckBookingAvailableResultSwalUseEffect from "./db-manage-add-booking-hooks/use-check-booking-available-result-swal-use-effect";
import useGetAllowsLargerPensBoolAndOwnersCustomersThunkUseEffect from "./db-manage-add-booking-hooks/use-get-allows-larger-pens-bool-and-owners-customers-thunk-use-effect";
import useConfirmAddBooking from "./db-manage-add-booking-hooks/use-confirm-add-booking.component";

import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";
import DbManageAddBookingTitleAndLoader from "./db-manage-add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";
import CheckInAndOutDateInput from "./inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";
import CheckInAndOutTimeSlotSelectInput from "./inputs/check-in-out-and-time-slot-input/check-in-and-out-time-slot.component";
import ShowBookingDataBeforeBooking from "./show-booking-data-before-booking.component";
import FailedDatesInfo from "./failed-dates-info.component";
import CheckAvailabilityButton from "./check-availability-button.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./booking-is-available-info-and-place-booking-button.component";

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
  const { customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected } =
    useAddBookingVariables();
  const { shouldShowFormSubmissionButtons, checkBookingAvailability } =
    useConfirmAddBooking();
  useGetAllowsLargerPensBoolAndOwnersCustomersThunkUseEffect();
  useCheckInAndOutDateValidityUseEffect();
  useCheckBookingAvailableResultSwalUseEffect();

  return (
    <Container>
      <DbManageAddBookingTitleAndLoader />

      {catteryAllowsLargerPensError ? (
        <ShowFetchErrors />
      ) : (
        <ParentDiv>
          <Form onSubmit={checkBookingAvailability}>
            {status === "bookingAvailable" ? null : (
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

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

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { Button } from "../../../styles/button/button.styles";

const DbManageAddBooking = () => {
  const {
    checkInDate,
    checkInSlot,
    checkOutDate,
    catteryAllowsLargerPensError,
  } = useGetDbManageAddBookingSelectors();
  const { customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected } =
    useAddBookingVariables();
  const { shouldShowAvailabilityCheckButton, checkBookingAvailability } =
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
            <ChooseCustomerSelectInput />
            <ChooseCatsInput />

            <CheckInAndOutDateInput
              condition={
                customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected
              }
              dateType="checkInDate"
              selectedDate={checkInDate}
            />

            <CheckInAndOutTimeSlotSelectInput
              condition={checkInDate}
              slotType="checkInSlot"
              showHr={checkInDate}
            />

            <CheckInAndOutDateInput
              condition={
                customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected &&
                checkInSlot
              }
              dateType="checkOutDate"
              selectedDate={checkOutDate}
            />

            <CheckInAndOutTimeSlotSelectInput
              condition={checkOutDate}
              slotType="checkOutSlot"
              showHr={checkOutDate}
            />

            {shouldShowAvailabilityCheckButton ? (
              <>
                <ShowBookingDataBeforeBooking />
                <FailedDatesInfo />
                <Button type="submit">check availability</Button>
              </>
            ) : null}
          </Form>
        </ParentDiv>
      )}
    </Container>
  );
};

export default DbManageAddBooking;

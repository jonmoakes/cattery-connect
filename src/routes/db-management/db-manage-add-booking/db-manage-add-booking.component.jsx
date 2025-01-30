import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import useAddBookingVariables from "./db-manage-add-booking-hooks/use-add-booking-variables";
import useGetAllCustomersThunkUseEffect from "../../../hooks/use-get-all-customers-thunk-use-effect";
import useCheckInAndOutDateValidityUseEffect from "./db-manage-add-booking-hooks/use-check-in-and-out-date-validity-use-effect";
import useConfirmAddBooking from "./db-manage-add-booking-hooks/use-confirm-add-booking.component";

import DbManageAddBookingTitleAndLoader from "./db-manage-add-booking-title-and-loader.component";
import ChooseCustomerSelectInput from "./inputs/choose-customer-select-input.component";
import ChooseCatsInput from "./inputs/choose-cats-input/choose-cats-input.component";
import CheckInAndOutDateInput from "./inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";
import CheckInAndOutTimeSlotSelectInput from "./inputs/check-in-out-and-time-slot-input/check-in-and-out-time-slot.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { Button } from "../../../styles/button/button.styles";

const DbManageAddBooking = () => {
  const { checkInDate, checkInSlot, checkOutDate } =
    useGetDbManageAddBookingSelectors();
  const { customerHasOneCatOrMoreThanOneCatAndAtLeastOneHasBeenSelected } =
    useAddBookingVariables();
  const { shouldShowBookingButton, confirmAddBooking } = useConfirmAddBooking();
  useGetAllCustomersThunkUseEffect();
  useCheckInAndOutDateValidityUseEffect();

  return (
    <Container>
      <DbManageAddBookingTitleAndLoader />

      <ParentDiv>
        <Form onSubmit={confirmAddBooking}>
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

          {shouldShowBookingButton ? (
            <Button type="submit">add booking</Button>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default DbManageAddBooking;

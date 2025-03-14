import CustomerSelectDropdown from "../../../components/customer-select-drop-down/customer-select-dropdown.component";
import ChooseCatsInput from "../inputs/choose-cats-input/choose-cats-input.component";
import MoreCatsSelectedThanSinglePenCapacity from "../ui/more-cats-selected-than-single-pen-capacity.component";
import CheckInAndOutDateInput from "../inputs/check-in-and-out-date-input/check-in-and-out-date-input.component";
import CheckInAndOutTimeSlotSelectInput from "../inputs/check-in-out-and-time-slot-input/check-in-and-out-time-slot.component";
import PaymentStatusSelectInput from "../inputs/payment-status-select-input.component";

const BookingFormSection = ({
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
}) => (
  <>
    {moreCatsInBookingThanCapacityInOnePen ? (
      <>
        <CustomerSelectDropdown {...{ handleCustomerSelectChange }} />
        <ChooseCatsInput />
        <MoreCatsSelectedThanSinglePenCapacity
          {...{ numberOfCatsInBooking, maximumCatsInSinglePen }}
        />
      </>
    ) : (
      <>
        <CustomerSelectDropdown {...{ handleCustomerSelectChange }} />
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
  </>
);

export default BookingFormSection;

import { useLocation } from "react-router-dom";

import Title from "./sections/title.component";
import CancelBookingBookingId from "./sections/cancel-booking-booking-id.component";
import CustomerName from "./sections/customer-name.component";
import CatsInBooking from "./sections/cats-in-booking.component";
import CheckInDate from "./sections/check-in-date.component";
import CheckInSlot from "./sections/check-in-slot.component";
import CheckOutDate from "./sections/check-out-date.component";
import CheckOutSlot from "./sections/check-out-slot.component";
import CostOfBooking from "./sections/cost-of-booking.component";
import PaymentStatus from "./sections/payment-status.component";
import AddBookingProceed from "./sections/add-booking-proceed.component";
import CancelBookingProceed from "./sections/cancel-booking-proceed.component";

import { BookingWrapper, DataDiv } from "../../styles/div/div.styles";

const ShowBookingData = ({
  bookingDataToShow,
  hasAdditionalCosts,
  additionalCosts,
  managesOwnPens,
}) => {
  const {
    bookingId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    totalCost,
    paymentStatus,
  } = bookingDataToShow;
  const location = useLocation();
  const path = location.pathname;

  return (
    <BookingWrapper>
      <DataDiv>
        <Title {...{ path }} />

        <ul>
          <CancelBookingBookingId {...{ path, bookingId }} />
          <CustomerName {...{ customerName }} />
          <CatsInBooking {...{ path, catsInBooking }} />
          <CheckInDate {...{ checkInDate }} />
          <CheckInSlot {...{ checkInSlot }} />
          <CheckOutDate {...{ checkOutDate }} />
          <CheckOutSlot {...{ checkOutSlot }} />
          <CostOfBooking
            {...{ path, hasAdditionalCosts, totalCost, additionalCosts }}
          />
          <PaymentStatus {...{ path, paymentStatus }} />
        </ul>

        <AddBookingProceed
          {...{ path, managesOwnPens, hasAdditionalCosts, additionalCosts }}
        />
        <CancelBookingProceed {...{ path }} />
      </DataDiv>
    </BookingWrapper>
  );
};

export default ShowBookingData;

import ChoosingDatesInfo from "./making-a-booking/choosing-dates-info.component";
import Intro from "./making-a-booking/intro.component";
import PaymentStatusAndSummary from "./making-a-booking/payment-status-and-summary.component";
import AvailabilityInfo from "./making-a-booking/availabilty-info.component";
import BookingCompleteInfo from "./making-a-booking/booking-complete-info.component";
import Outro from "./making-a-booking/outro.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const MakingABooking = () => (
  <>
    <BlackHr />
    <Intro />
    <ChoosingDatesInfo />
    <PaymentStatusAndSummary />
    <AvailabilityInfo />
    <BookingCompleteInfo />
    <Outro />
  </>
);

export default MakingABooking;

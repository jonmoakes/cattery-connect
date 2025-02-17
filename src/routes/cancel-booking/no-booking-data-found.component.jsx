import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import { bookingsRoute } from "../../strings/routes";

import { ParentDiv } from "../../styles/div/div.styles";

const NoBookingDataFound = () => (
  <ParentDiv>
    <CustomBalancedText>
      we couldn't find any data needed in order to cancel the booking.
    </CustomBalancedText>
    <CustomBalancedText>
      have you recently used the browsers back and forward buttons to leave and
      then come back to this page?
    </CustomBalancedText>
    <CustomBalancedText>
      doing so causes the data needed to cancel a booking to be lost.
    </CustomBalancedText>
    <CustomBalancedText>
      please go back to the{" "}
      <CustomSpan type="link" to={bookingsRoute}>
        bookings table
      </CustomSpan>{" "}
      and choose a booking to cancel again.
    </CustomBalancedText>
  </ParentDiv>
);

export default NoBookingDataFound;

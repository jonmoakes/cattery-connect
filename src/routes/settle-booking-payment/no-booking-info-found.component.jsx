import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { signedInCustomersBookingsRoute } from "../../strings/routes";

const NoBookingInfoFound = () => (
  <ParentDiv>
    <CustomBalancedText>no data found.</CustomBalancedText>
    <CustomBalancedText>
      have you recently reloaded the page or used the browsers back and then
      forward button?
    </CustomBalancedText>
    <CustomBalancedText>
      doing so causes the data passed to this page to be lost.
    </CustomBalancedText>
    <CustomBalancedText>
      please go back to your{" "}
      <StyledLink to={signedInCustomersBookingsRoute}>bookings</StyledLink> and
      select the booking that you wish to make a payment for again.
    </CustomBalancedText>
    <CustomBalancedText>we apologise for the inconvenience!</CustomBalancedText>
  </ParentDiv>
);

export default NoBookingInfoFound;

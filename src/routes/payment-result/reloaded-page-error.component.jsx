import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { signedInCustomersBookingsRoute } from "../../strings/routes";

const ReloadedPageError = () => (
  <ParentDiv>
    <CustomBalancedText type="h1">important - please read!</CustomBalancedText>
    <CustomBalancedText type="h2">no payment result found.</CustomBalancedText>
    <CustomBalancedText>
      have you recently reloaded the page?
    </CustomBalancedText>
    <CustomBalancedText>
      if you got the message that the payment was successful, this means that
      the payment status will have not been updated in the database.
    </CustomBalancedText>
    <CustomBalancedText>
      you will therefore see 'incomplete' next to the payment you just made.
    </CustomBalancedText>
    <CustomBalancedText>
      please DO NOT attempt to make the payment again as it has already
      succeeded.
    </CustomBalancedText>
    <CustomBalancedText>
      instead, please contact your cattery so that they can update the payment
      status manually.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      if you got the message that they payment was unsuccessful, you can safely
      go back to your{" "}
      <StyledLink to={signedInCustomersBookingsRoute}>bookings</StyledLink> to
      attempt the payment again should you so wish.
    </CustomBalancedText>
  </ParentDiv>
);

export default ReloadedPageError;

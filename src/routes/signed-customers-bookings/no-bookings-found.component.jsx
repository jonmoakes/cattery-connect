import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const NoBookingsFound = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">no bookings found.</CustomBalancedText>
    <CustomBalancedText>no bookings have been created yet.</CustomBalancedText>
  </ParentDiv>
);

export default NoBookingsFound;

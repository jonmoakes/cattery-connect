import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

import { addBookingRoute, cancelBookingRoute } from "../../../strings/routes";

const Title = ({ path }) => (
  <>
    <CustomBalancedText type="h3">
      {path === addBookingRoute
        ? "booking details"
        : path === cancelBookingRoute && "details of the booking to cancel"}
      :
    </CustomBalancedText>
    <BlackHr />
  </>
);

export default Title;

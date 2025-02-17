import useBookingsTableVariables from "./bookings-hooks/use-bookings-table-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import { addBookingRoute } from "../../strings/routes";

const NoBookingsFound = () => {
  const { atLeastOneBookingExists } = useBookingsTableVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <CustomBalancedText type="h2">no bookings found.</CustomBalancedText>
      <CustomBalancedText>
        no bookings have been created yet.
      </CustomBalancedText>

      {!atLeastOneBookingExists ? (
        <MinimalButton
          className="margin-bottom"
          onClick={() => hamburgerHandlerNavigate(addBookingRoute)}
        >
          add a booking
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default NoBookingsFound;

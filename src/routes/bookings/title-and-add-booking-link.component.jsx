import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { addBookingRoute } from "../../strings/routes";
import useBookingsTableVariables from "./bookings-hooks/use-bookings-table-variables";

const TitleAndAddBookingLink = () => {
  const { atLeastOneBookingExists } = useBookingsTableVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">your bookings</CustomBalancedText>

      {atLeastOneBookingExists ? (
        <MinimalButton
          className="margin-bottom"
          onClick={() => hamburgerHandlerNavigate(addBookingRoute)}
        >
          add another booking
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddBookingLink;

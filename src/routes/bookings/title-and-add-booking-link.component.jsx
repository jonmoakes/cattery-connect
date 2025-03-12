import useBookingsTableVariables from "./bookings-hooks/use-bookings-table-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useBookingsTableAccordionData from "./bookings-hooks/use-bookings-table-accordion-data";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import { addBookingRoute } from "../../strings/routes";

const TitleAndAddBookingLink = () => {
  const { atLeastOneBookingExists } = useBookingsTableVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { bookingsTableAccordionData } = useBookingsTableAccordionData();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">your bookings</CustomBalancedText>

      {atLeastOneBookingExists ? (
        <>
          <MinimalButton
            onClick={() => hamburgerHandlerNavigate(addBookingRoute)}
            className="teal"
          >
            add another booking
          </MinimalButton>

          <HelpAccordion
            className="bookings"
            openText="bookings help"
            data={bookingsTableAccordionData}
          />
        </>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddBookingLink;

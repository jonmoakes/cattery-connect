import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import Introduction from "./sections/introduction.component";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import Definitions from "./sections/definitions.component";
import GeographicRestrictions from "./sections/geographic-restrictions.component";
import UserAccounts from "./sections/user-accounts.component";
import UserConduct from "./sections/user-conduct.component";
import BookingsAndCancellations from "./sections/bookings-and-cancellations.component";
import PaymentsAndBilling from "./sections/payments-and-billing.component";
import DataAccuracy from "./sections/data-accuracy.component";
import IntellectualProperty from "./sections/intellectual-property.component";
import Disclaimers from "./sections/disclaimers.component";
import Termination from "./sections/termination.component";
import GoverningLaw from "./sections/governing-law.component";
import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";

const TermsAndConditions = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">Terms And Conditions</CustomBalancedText>
    </ParentDiv>

    <Introduction />
    <Definitions />
    <GeographicRestrictions />
    <UserAccounts />
    <UserConduct />
    <BookingsAndCancellations />
    <PaymentsAndBilling />
    <DataAccuracy />
    <IntellectualProperty />
    <Disclaimers />
    <Termination />
    <GoverningLaw />
    <PolicyContactInfo />
  </Container>
);

export default TermsAndConditions;

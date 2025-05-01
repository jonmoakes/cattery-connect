import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import Metadata from "../../components/metadata/metadata.component";
import Introduction from "./sections/introduction.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import LegalDefinitions from "../../components/legal/legal-definitions/legal-definitions.component";
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
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";
import PolicyContactInfo from "../../components/legal//policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TermsAndConditions = () => (
  <Container>
    <Metadata
      title="Cattery Connect - Terms and Conditions"
      description="Review the terms and conditions for using Cattery Connect. Understand your rights and responsibilities when managing your cattery with our platform."
      ogTitle="Cattery Connect - Terms and Conditions"
      ogDescription="Read the terms and conditions for Cattery Connect to ensure compliance and a smooth experience managing your cattery."
    />
    <ParentDiv>
      <CustomBalancedText type="h1">Terms And Conditions</CustomBalancedText>
    </ParentDiv>

    <Introduction />
    <PolicyLastUpdated date="31st May 2025" />
    <LegalDefinitions />
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
    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default TermsAndConditions;

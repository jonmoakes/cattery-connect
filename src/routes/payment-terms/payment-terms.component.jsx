import Title from "./sections/title.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import LegalDefinitions from "../../components/legal/legal-definitions/legal-definitions.component";
import Intro from "./sections/intro.component";
import SubscriptionPayments from "./sections/subscription-payments.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";
import CustomerPayments from "./sections/customer-payments.component";

const PaymentTerms = () => (
  <Container>
    <Title />
    <PolicyLastUpdated date="11th March 2025" />
    <LegalDefinitions />
    <Intro />
    <SubscriptionPayments />
    <CustomerPayments />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default PaymentTerms;

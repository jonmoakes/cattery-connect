import Metadata from "../../components/metadata/metadata.component";
import Title from "./sections/title.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import LegalDefinitions from "../../components/legal/legal-definitions/legal-definitions.component";
import Intro from "./sections/intro.component";
import SubscriptionPayments from "./sections/subscription-payments.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import CustomerPayments from "./sections/customer-payments.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const PaymentTerms = () => (
  <Container>
    <Metadata
      title="Cattery Connect - Payment Terms"
      description="Understand the payment terms for using Cattery Connect, including billing, subscription fees, and accepted payment methods."
      ogTitle="Cattery Connect - Payment Terms"
      ogDescription="Read the payment terms for Cattery Connect, including details on billing cycles, accepted payment methods, and fees."
    />
    <Title />
    <PolicyLastUpdated date="1st April 2025" />
    <LegalDefinitions />
    <Intro />
    <SubscriptionPayments />
    <CustomerPayments />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default PaymentTerms;

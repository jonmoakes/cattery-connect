import Metadata from "../../components/metadata/metadata.component";
import RefundsPolicyTitleAndIntro from "./sections/refunds-policy-title-and-intro.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import LegalDefinitions from "../../components/legal/legal-definitions/legal-definitions.component";
import Eligibility from "./sections/eligibility.component";
import Timeframes from "./sections/timeframes.component";
import Process from "./sections/process.component";
import NonRefundable from "./sections/non-refundable.component";
import PartialRefunds from "./sections/partial-refunds.component";
import RefundMethods from "./sections/refund-methods.component";
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const RefundsPolicy = () => (
  <Container>
    <Metadata
      title="Cattery Connect - Refund Policy"
      description="Review the refund policy for Cattery Connect to understand eligibility for refunds and the process for requesting one."
      ogTitle="Cattery Connect - Refund Policy"
      ogDescription="Learn about Cattery Connect's refund policy, including conditions for refunds and how to request one."
    />
    <RefundsPolicyTitleAndIntro />
    <PolicyLastUpdated date="1st April 2025" />
    <LegalDefinitions />
    <Eligibility />
    <Timeframes />
    <Process />
    <NonRefundable />
    <PartialRefunds />
    <RefundMethods />
    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default RefundsPolicy;

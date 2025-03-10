import RefundsPolicyTitleAndIntro from "./sections/refunds-policy-title-and-intro.component";
import LegalDefinitions from "../../components/legal-definitions/legal-definitions.component";
import Eligibility from "./sections/eligibility.component";
import Timeframes from "./sections/timeframes.component";
import Process from "./sections/process.component";
import NonRefundable from "./sections/non-refundable.component";
import PartialRefunds from "./sections/partial-refunds.component";
import RefundMethods from "./sections/refund-methods.component";
import ChangesToPolicy from "./sections/changes-to-policy.component";
import NextPolicyLink from "../../components/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const RefundsPolicy = () => (
  <Container>
    <RefundsPolicyTitleAndIntro />
    <LegalDefinitions />
    <Eligibility />
    <Timeframes />
    <Process />
    <NonRefundable />
    <PartialRefunds />
    <RefundMethods />
    <ChangesToPolicy />
    <NextPolicyLink />
  </Container>
);

export default RefundsPolicy;

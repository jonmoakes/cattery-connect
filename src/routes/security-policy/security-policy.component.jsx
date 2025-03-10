import SecurityPolicyTitleAndIntro from "./sections/security-policy-title-and-intro.component";
import ProtectionMeasures from "./sections/protection-measures.component";
import InfastructureSecurity from "./sections/infastructure-security.component";
import DevelopmentPractices from "./sections/development-practices.component";
import IncidentResponse from "./sections/incident-response.component";
import UserEducation from "./sections/user-education.component";
import RegulationCompliance from "./sections/regulation-compliance.component";
import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const SecurityPolicy = () => (
  <Container>
    <SecurityPolicyTitleAndIntro />
    <ProtectionMeasures />
    <InfastructureSecurity />
    <DevelopmentPractices />
    <IncidentResponse />
    <UserEducation />
    <RegulationCompliance />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default SecurityPolicy;

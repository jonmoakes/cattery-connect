import SecurityPolicyTitleAndIntro from "./sections/security-policy-title-and-intro.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import ProtectionMeasures from "./sections/protection-measures.component";
import InfastructureSecurity from "./sections/infastructure-security.component";
import DevelopmentPractices from "./sections/development-practices.component";
import IncidentResponse from "./sections/incident-response.component";
import UserEducation from "./sections/user-education.component";
import RegulationCompliance from "./sections/regulation-compliance.component";
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const SecurityPolicy = () => (
  <Container>
    <SecurityPolicyTitleAndIntro />
    <PolicyLastUpdated date="11th March 2025" />
    <ProtectionMeasures />
    <InfastructureSecurity />
    <DevelopmentPractices />
    <IncidentResponse />
    <UserEducation />
    <RegulationCompliance />
    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default SecurityPolicy;

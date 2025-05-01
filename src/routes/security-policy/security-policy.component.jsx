import Metadata from "../../components/metadata/metadata.component";
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
    <Metadata
      title="Cattery Connect - Security Policy"
      description="Discover the security measures Cattery Connect takes to protect your data and ensure safe transactions."
      ogTitle="Cattery Connect - Security Policy"
      ogDescription="Cattery Connect prioritises security. Read about the steps we take to keep your information safe."
    />
    <SecurityPolicyTitleAndIntro />
    <PolicyLastUpdated date="31st May 2025" />
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

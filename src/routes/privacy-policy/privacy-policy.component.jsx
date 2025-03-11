import TitleAndIntro from "./sections/title-and-intro.component";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import LegalDefinitions from "../../components/legal/legal-definitions/legal-definitions.component";
import InformationCollection from "./sections/information-collection.component";
import LegalBasis from "./sections/legal-basis.component";
import UseOfInformation from "./sections/use-of-information.component";
import DataSharingAndDisclosure from "./sections/data-sharing-and-disclosure.component";
import SecurityMeasures from "./sections/security-measures.compoent";
import DataRetention from "./sections/data-retention.component";
import UserRights from "./sections/user-rights.component";
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const PrivacyPolicy = () => (
  <Container>
    <TitleAndIntro />
    <PolicyLastUpdated date="11th March 2025" />
    <LegalDefinitions />
    <InformationCollection />
    <LegalBasis />
    <UseOfInformation />
    <DataSharingAndDisclosure />
    <SecurityMeasures />
    <DataRetention />
    <UserRights />
    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default PrivacyPolicy;

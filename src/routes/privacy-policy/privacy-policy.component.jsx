import TitleAndIntro from "./sections/title-and-intro.component";
import LegalDefinitions from "../../components/legal-definitions/legal-definitions.component";
import InformationCollection from "./sections/information-collection.component";
import LegalBasis from "./sections/legal-basis.component";
import UseOfInformation from "./sections/use-of-information.component";
import DataSharingAndDisclosure from "./sections/data-sharing-and-disclosure.component";
import SecurityMeasures from "./sections/security-measures.compoent";
import DataRetention from "./sections/data-retention.component";
import UserRights from "./sections/user-rights.component";
import ChangesToPolicy from "./sections/changes-to-policy.component";
import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";
import CookiePolicyLink from "./sections/cookie-policy-link.component";

import { Container } from "../../styles/container/container.styles";

const PrivacyPolicy = () => (
  <Container>
    <TitleAndIntro />
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
    <CookiePolicyLink />
  </Container>
);

export default PrivacyPolicy;

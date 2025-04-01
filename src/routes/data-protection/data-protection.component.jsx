import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import PolicyContactInfo from "../../components/legal/policy-contact-info/policy-contact-info.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { privacyPolicyRoute } from "../../strings/routes";
import PolicyLastUpdated from "../../components/legal/policy-last-updated/policy-last-updated.component";
import ChangesToPolicy from "../../components/legal/changes-to-policy/changes-to-policy.component";

const DataProtection = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">Data Protection</CustomBalancedText>
    </ParentDiv>

    <PolicyLastUpdated date="1st April 2025" />

    <ParentDiv>
      <CustomBalancedText>
        At Cattery Connect, we prioritise the security and privacy of your
        personal data.{" "}
      </CustomBalancedText>
      <CustomBalancedText>
        For detailed information on how we handle, store, and protect your data,
        please refer to the relevant sections in our{" "}
        <StyledLink to={privacyPolicyRoute}>Privacy Policy</StyledLink>.
      </CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText type="h2">
        Key Points of Our Data Protection Policy:
      </CustomBalancedText>

      <CustomBalancedText>
        We process personal data under lawful bases, including contractual
        necessity ( to provide our services ), legitimate interests ( to improve
        our app), and user consent ( where required ).
      </CustomBalancedText>

      <CustomBalancedText>
        We retain personal data only for as long as necessary to fulfil the
        purposes outlined in this policy or as required by law.
      </CustomBalancedText>

      <CustomBalancedText>
        Where personal data is transferred outside the UK, we ensure appropriate
        safeguards are in place, such as Standard Contractual Clauses ( SCCs )
        or other recognised mechanisms.
      </CustomBalancedText>

      <CustomBalancedText>
        We collect and use your personal data to facilitate and manage bookings,
        communicate with you, process payments, and ensure the safety of your
        cats.
      </CustomBalancedText>

      <CustomBalancedText>
        We may share your data with third parties, such as payment processors,
        under strict data protection agreements to ensure compliance with data
        protection standards.
      </CustomBalancedText>

      <CustomBalancedText>
        To protect your data, we employ robust security measures, including
        encryption, access controls, and regular audits.
      </CustomBalancedText>

      <CustomBalancedText>You have the right to:</CustomBalancedText>

      <ul className="bullet">
        <li>
          Access, correct, delete, or object to the processing of your data.
        </li>
        <li>Restrict data processing or request data portability.</li>
        <li>Withdraw consent at any time.</li>
      </ul>

      <CustomBalancedText>
        We process personal data in accordance with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018,
        ensuring that your information is handled lawfully, fairly, and
        transparently.
      </CustomBalancedText>
    </ParentDiv>

    <ChangesToPolicy />
    <PolicyContactInfo />
    <NextPolicyLink />
  </Container>
);

export default DataProtection;

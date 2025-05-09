import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const LegalBasis = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Legal Basis for Processing:
    </CustomBalancedText>
    <CustomBalancedText>
      We process your personal information based on the following legal grounds:
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      Consent:
      <br />
      We collect and process personal information with your consent.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      Performance of a Contract:
      <br />
      Processing your data is necessary for managing bookings and providing the
      services you request.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      Legal Obligations:
      <br />
      We may process your data to comply with applicable laws and regulations.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      Legitimate Interests:
      <br />
      We process data to improve our services, enhance user experience, and
      ensure the security of our app.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default LegalBasis;

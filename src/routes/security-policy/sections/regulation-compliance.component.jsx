import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const RegulationCompliance = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Compliance with Regulations
    </CustomBalancedText>

    <CustomBalancedText type="h3">Legal Compliance:</CustomBalancedText>

    <CustomBalancedText>
      I ensure that the app complies with all applicable data protection laws
      and regulations, including the UK GDPR and the Data Protection Act 2018. I
      stay informed of any changes in legislation and update the app’s practices
      and policies as necessary to maintain ongoing compliance.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default RegulationCompliance;

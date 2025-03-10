import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const IncidentResponse = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Incident Response and Data Breach Management
    </CustomBalancedText>

    <CustomBalancedText type="h3">Incident Response Plan:</CustomBalancedText>

    <CustomBalancedText>
      As the sole developer, I have established a clear and comprehensive
      incident response plan to guide my actions in the event of a security
      incident or data breach. This plan outlines procedures for promptly
      addressing the issue and notifying affected users, regulatory authorities,
      and any other relevant parties in a timely manner.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">Data Breach Notification:</CustomBalancedText>

    <CustomBalancedText>
      In the event of a data breach that compromises the security of users'
      personal information, I will notify affected users in accordance with
      applicable data protection laws and regulations. I will take immediate
      steps to ensure that the breach is properly contained and mitigated.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default IncidentResponse;

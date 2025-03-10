import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

import { BlackHr } from "../../../styles/hr/hr.styles";

const UserEducation = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">User Education & Training</CustomBalancedText>

    <CustomBalancedText type="h3">Security Training:</CustomBalancedText>

    <CustomBalancedText>
      As the sole developer, I ensure that I stay up to date with the latest
      security best practices through continuous learning and professional
      development. This enables me to understand the most effective methods for
      protecting user data and mitigating security risks.
    </CustomBalancedText>
    <BlackHr />

    <CustomBalancedText type="h3">user guidance:</CustomBalancedText>

    <CustomBalancedText>
      I provide clear guidance and resources to help users understand how they
      can protect their own data and minimise security risks while using the
      app. This includes recommendations on strong password practices,
      recognising phishing attempts, and securing their devices.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default UserEducation;

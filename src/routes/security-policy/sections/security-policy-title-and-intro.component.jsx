import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const SecurityPolicyTitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h2">security policy</CustomBalancedText>
    </ParentDiv>
    <ParentDiv>
      <CustomBalancedText>
        We prioritise the security and privacy of our users' data.
      </CustomBalancedText>
      <CustomBalancedText>
        This Security Policy outlines the measures we take to protect your
        information and ensure the security of our app.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default SecurityPolicyTitleAndIntro;

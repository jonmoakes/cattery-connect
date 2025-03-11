import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const RefundsPolicyTitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">refunds policy</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText type="h2">Introduction</CustomBalancedText>
      <CustomBalancedText>
        At Cattery Connect, I strive to ensure that my users are completely
        satisfied with my services.
      </CustomBalancedText>
      <CustomBalancedText>
        This policy outlines the conditions and procedures for requesting a
        refund for any services provided through my app.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default RefundsPolicyTitleAndIntro;

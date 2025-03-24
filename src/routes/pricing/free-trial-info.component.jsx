import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const FreeTrialInfo = () => (
  <ParentDiv>
    <CustomBalancedText type="h3">
      30 day no obligation free trial!
    </CustomBalancedText>

    <CustomBalancedText>✅ No card required!</CustomBalancedText>
    <CustomBalancedText>✅ No obligation - cancel anytime!</CustomBalancedText>
    <BlackHr />
    <CustomBalancedText type="h3">What’s Included?</CustomBalancedText>
    <CustomBalancedText>🚀 Full access to all features</CustomBalancedText>
    <CustomBalancedText>📅 Easy booking management</CustomBalancedText>
    <CustomBalancedText>
      💳 allow your customers to pay for their booking online
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText type="h3">Founder’s Rate Guarantee </CustomBalancedText>
    <CustomBalancedText>
      Start your free trial before 30th April 2025, and you’ll lock in the
      founders rate ( see section below ) - even if your trial runs into May!
    </CustomBalancedText>
  </ParentDiv>
);

export default FreeTrialInfo;

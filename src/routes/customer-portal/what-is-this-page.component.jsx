import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../styles/hr/hr.styles";

const WhatIsThisPage = () => (
  <>
    <BlackHr />
    <CustomBalancedText type="h2">what is this page?</CustomBalancedText>
    <CustomBalancedText>
      Here, you can access your customer portal to manage your subscription. You
      can:
    </CustomBalancedText>
    <ul>
      <li>Cancel your subscription</li>
      <li>Update your payment card</li>
      <li>Manage your billing details</li>
    </ul>

    <CustomBalancedText>
      Tap "Launch Portal" above or at the bottom of this page to proceed.
    </CustomBalancedText>
  </>
);

export default WhatIsThisPage;

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { BlackHr } from "../../styles/hr/hr.styles";

const HowDoesItWork = () => (
  <>
    <BlackHr />
    <CustomBalancedText type="h2">How does it work?</CustomBalancedText>
    <CustomBalancedText>
      Click "Launch Portal" to open a secure Stripe-hosted page.
    </CustomBalancedText>

    <CustomBalancedText>
      Enter the email address you used to subscribe.
    </CustomBalancedText>

    <CustomBalancedText>
      Tap "Send" - Stripe will email you a login link.
    </CustomBalancedText>

    <CustomBalancedText>
      Open the email and click "Log into your customer portal".
    </CustomBalancedText>

    <CustomBalancedText>
      You’ll be redirected to a secure page where you can manage your
      subscription.
    </CustomBalancedText>
  </>
);

export default HowDoesItWork;

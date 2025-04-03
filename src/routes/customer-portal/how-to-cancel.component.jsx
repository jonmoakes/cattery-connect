import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../styles/hr/hr.styles";

const HowToCancel = () => (
  <>
    <BlackHr />
    <CustomBalancedText type="h2">how do i cancel?</CustomBalancedText>
    <CustomBalancedText>We're sorry to see you go! 😿</CustomBalancedText>
    <CustomBalancedText>
      In the customer portal, tap "Cancel Subscription".
    </CustomBalancedText>
    <CustomBalancedText>
      Optionally, provide feedback ( we’d love to hear your thoughts! ).
    </CustomBalancedText>
    <CustomBalancedText>
      Your subscription will remain active until the end of your billing period.
    </CustomBalancedText>
    <CustomBalancedText>You can resubscribe anytime.</CustomBalancedText>
    <BlackHr />
  </>
);

export default HowToCancel;

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const FeaturesAvailableInfo = () => (
  <>
    <BlackHr />
    <CustomBalancedText className="red">
      What features are included in the free trial?
    </CustomBalancedText>
    <CustomBalancedText>
      Everything! You’ll have full access to booking management, customer
      details, and online payments.
    </CustomBalancedText>
    <CustomBalancedText>
      🔹 If you choose to accept online payments, you’ll need your own Stripe
      account. It’s free, easy to set up, and ensures you stay in full control
      of your finances.
    </CustomBalancedText>
  </>
);

export default FeaturesAvailableInfo;

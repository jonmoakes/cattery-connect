import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const PaymentRequiredInfo = () => (
  <>
    <BlackHr />
    <CustomBalancedText className="red">
      Do I need to enter payment details for the free trial?
    </CustomBalancedText>
    <CustomBalancedText>
      No! You can try the app completely free for 30 days - no card required!.
    </CustomBalancedText>
  </>
);

export default PaymentRequiredInfo;

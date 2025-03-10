import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const RefundMethods = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">refund methods:</CustomBalancedText>

    <CustomBalancedText>
      Refunds for app subscription fees will be processed to the original
      payment method used during the purchase.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default RefundMethods;

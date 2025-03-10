import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const PartialRefunds = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">partial refunds:</CustomBalancedText>

    <CustomBalancedText>
      Partial refunds for app subscriptions may be issued depending on the
      length of service used and the specific circumstances surrounding the
      refund request. The amount refunded will be assessed on a case-by-case
      basis.
    </CustomBalancedText>

    <BlackHr />
  </ParentDiv>
);

export default PartialRefunds;

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const NonRefundable = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">
      Non-Refundable Items / Services:
    </CustomBalancedText>

    <CustomBalancedText>
      Please note that certain charges are non-refundable, including:
    </CustomBalancedText>

    <ul className="bullit">
      <li>Administrative fees</li>
      <li> Late cancellation charges for app subscriptions</li>
    </ul>
    <CustomBalancedText>
      These fees will not be refunded under any circumstances.
    </CustomBalancedText>
    <CustomBalancedText>
      Refunds may not be granted if the service has been used in violation of
      our Terms of Service.
    </CustomBalancedText>
    <CustomBalancedText>
      Refunds are not granted for partial usage beyond the initial cancellation
      period.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default NonRefundable;

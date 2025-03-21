import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import { TotalCostDiv } from "../../styles/div/div.styles";

const Instructions = ({ totalCost }) => (
  <>
    <CustomBalancedText>your card will be charged:</CustomBalancedText>

    <TotalCostDiv>
      <CustomSpan className="total-cost">
        £{(totalCost / 100).toFixed(2)}
      </CustomSpan>
    </TotalCostDiv>
    <CustomBalancedText>
      please enter your card details and then press the
      <br />
      'settle payment'{}
      <br />
      button when it appears.
    </CustomBalancedText>
    <CustomBalancedText>
      you will have a chance to confirm again before processing the payment.
    </CustomBalancedText>
  </>
);

export default Instructions;

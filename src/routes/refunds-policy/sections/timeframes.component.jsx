import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Timeframes = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">timeframes:</CustomBalancedText>

    <CustomBalancedText>
      Refund requests for app subscriptions must be made within 30 days of the
      billing date.
    </CustomBalancedText>
    <CustomBalancedText>
      Refunds will be processed to the owner's bank account immediately, though
      it may take 5 to 10 working days for the funds to appear in their account.
    </CustomBalancedText>
    <CustomBalancedText>
      In some cases, refunds may be processed as reversals, where the original
      payment is removed from the account statement, and the balance reflects as
      if the charge never occurred.
    </CustomBalancedText>

    <BlackHr />
  </ParentDiv>
);

export default Timeframes;

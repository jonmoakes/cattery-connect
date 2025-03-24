import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Cancelling = () => (
  <>
    <BlackHr />
    <CustomBalancedText className="red">
      Can I cancel anytime?
    </CustomBalancedText>
    <CustomBalancedText>
      Absolutely! I believe cancelling should be easy and hassle free.
    </CustomBalancedText>
    <CustomBalancedText>
      🚀 You can cancel in just a few clicks, and you won’t be charged for the
      next billing period.
    </CustomBalancedText>
  </>
);

export default Cancelling;

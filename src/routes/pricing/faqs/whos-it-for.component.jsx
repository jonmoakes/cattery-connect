import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const WhosItFor = () => (
  <>
    <BlackHr />
    <CustomBalancedText className="red">
      Is this just for catteries?
    </CustomBalancedText>
    <CustomBalancedText>
      Yes! This app is built specifically for catteries to simplify booking
      management, customer tracking, and payments.
    </CustomBalancedText>
  </>
);

export default WhosItFor;

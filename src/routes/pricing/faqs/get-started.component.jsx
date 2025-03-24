import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const GetStarted = () => (
  <>
    <BlackHr />
    <CustomBalancedText className="red">
      How do I get started?
    </CustomBalancedText>
    <CustomBalancedText>
      Getting started is easy! I’ll just need a quick call, email, or meeting (
      whichever you prefer ) to collect a few details about your cattery - like
      your pricing and opening dates. Then, you’re good to go!
    </CustomBalancedText>
  </>
);

export default GetStarted;

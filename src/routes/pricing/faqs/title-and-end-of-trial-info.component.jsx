import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { BlackHr } from "../../../styles/hr/hr.styles";

const TitleAndEndOfTrialInfo = () => (
  <>
    <CustomBalancedText type="h3">FAQ's</CustomBalancedText>
    <BlackHr />
    <CustomBalancedText className="red">
      What happens after my free trial ends?
    </CustomBalancedText>
    <CustomBalancedText>
      If you decide to continue, you can subscribe for the prices listed above.
    </CustomBalancedText>
    <CustomBalancedText>
      If you don’t subscribe, your account will be deactivated, and all entered
      data will be fully deleted. You won’t be charged anything.
    </CustomBalancedText>
  </>
);

export default TitleAndEndOfTrialInfo;

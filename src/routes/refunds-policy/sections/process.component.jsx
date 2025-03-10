import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Process = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">process:</CustomBalancedText>

    <CustomBalancedText>
      To request a refund for the app subscription fee, please contact our
      support team at:
    </CustomBalancedText>

    <CustomBalancedText>
      <CustomSpan type="lowercase">jonathan@solaris-apps.co.uk</CustomSpan>
    </CustomBalancedText>

    <CustomBalancedText>or</CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan type="lowercase">admin@cattery-connect.co.uk</CustomSpan>
    </CustomBalancedText>

    <CustomBalancedText>
      Please include the following information in your request:
    </CustomBalancedText>
    <ul className="bullit">
      <li>the name of your cattery</li>
      <li>you cattery code</li>
      <li>the reason for the refund request</li>
    </ul>
    <BlackHr />
    <CustomBalancedText>
      You will be notified via email once your refund has been processed.
    </CustomBalancedText>

    <CustomBalancedText>
      We reserve the right to refuse a refund request if it is determined to be
      fraudulent or abusive.
    </CustomBalancedText>
  </ParentDiv>
);

export default Process;

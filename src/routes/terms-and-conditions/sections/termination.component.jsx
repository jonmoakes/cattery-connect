import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Termination = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">termination</CustomBalancedText>

    <CustomBalancedText>
      We reserve the right to terminate or suspend your account if you violate
      these terms and conditions.
    </CustomBalancedText>

    <BlackHr />
    <CustomBalancedText type="h3">for owners</CustomBalancedText>
    <CustomBalancedText>
      owners may terminate their account subject to the terms outlined in the
      contract signed before purchasing the app.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText type="h3">for customers</CustomBalancedText>
    <CustomBalancedText>
      customers may terminate their account at any time by signing into the app
      and scrolling down to 'close account' and following the instructions
      therein.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default Termination;

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import { signedInCustomersDetailsRoute } from "../../strings/routes";

import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

const CatteryDetailsIntro = () => (
  <ParentDiv>
    <CustomBalancedText>
      these are the details of the cattery that you are linked to.
    </CustomBalancedText>
    <CustomBalancedText>
      if you make any payments for a booking you have made, it will go to this
      cattery.
    </CustomBalancedText>
    <CustomBalancedText>
      if you ever want to pay for a stay for your cats in another cattery that
      uses cattery connect, please contact the owner of the new cattery and make
      sure that they have updated you to have their{" "}
      <CustomSpan className="red">Cattery code</CustomSpan>, so that payment
      goes to the correct cattery.
    </CustomBalancedText>
    <CustomBalancedText>
      you will need to give your new cattery your{" "}
      <CustomSpan className="red">customer Id</CustomSpan> which you can find{" "}
      <StyledLink to={signedInCustomersDetailsRoute}>here</StyledLink>.
    </CustomBalancedText>
    <CustomBalancedText>
      please make sure that you have settled any payments with your current
      cattery before you do this however.
    </CustomBalancedText>
  </ParentDiv>
);

export default CatteryDetailsIntro;

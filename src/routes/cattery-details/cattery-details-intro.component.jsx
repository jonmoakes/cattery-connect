import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

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
      uses cattery connect, please contact the owner of the new cattery, who
      will be able to update your details so that payment goes to the correct
      cattery.
    </CustomBalancedText>
  </ParentDiv>
);

export default CatteryDetailsIntro;

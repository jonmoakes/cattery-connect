import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const Intro = () => (
  <ParentDiv>
    <CustomBalancedText>
      here, you can update the price per night that your customers pay.
    </CustomBalancedText>
    <CustomBalancedText>
      the new price will only apply to bookings made after the successful price
      update
    </CustomBalancedText>
  </ParentDiv>
);

export default Intro;

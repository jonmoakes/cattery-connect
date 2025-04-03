import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const Instructions = () => (
  <ParentDiv>
    <CustomBalancedText>
      enter in your new price per night below and then tap the 'update price'
      button when it appears.
    </CustomBalancedText>
    <CustomBalancedText>
      please enter the price in PENCE ( ie 1000 for £10 per night )
    </CustomBalancedText>
    <CustomBalancedText>
      this is due to how the price is handled in our database.
    </CustomBalancedText>
  </ParentDiv>
);

export default Instructions;

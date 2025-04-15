import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

const Intro = () => (
  <ParentDiv>
    <CustomBalancedText>
      Here, you can update the prices that your customers will pay for their
      bookings.
    </CustomBalancedText>
    <CustomBalancedText>
      These prices are used to calculate the booking cost, which will appear on
      customer receipts and in your records.
    </CustomBalancedText>
    <CustomBalancedText>
      If you allow customers to pay through the app, these prices will also
      determine the amount they are charged.
    </CustomBalancedText>
    <CustomBalancedText>
      Please note, the new prices will only apply to bookings made after the
      price update is successfully confirmed.
    </CustomBalancedText>
  </ParentDiv>
);

export default Intro;

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const Intro = () => (
  <ParentDiv>
    <CustomBalancedText>
      this page provides information on how the owner pays the administrator for
      the use of the app.
    </CustomBalancedText>
    <CustomBalancedText>
      it also provides information on how the customer pays the owner ( should
      the owner choose to accept online payments ).
    </CustomBalancedText>
  </ParentDiv>
);

export default Intro;

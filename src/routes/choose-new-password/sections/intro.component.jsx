import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const Intro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">
        create your new password
      </CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        enter in your new password, then retype it to confirm it.
      </CustomBalancedText>
      <CustomBalancedText>
        then tap the "update password" button when it appears.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default Intro;

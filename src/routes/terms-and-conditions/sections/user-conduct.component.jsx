import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ParentDiv } from "../../../styles/div/div.styles";

const UserConduct = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">User conduct:</CustomBalancedText>

    <CustomBalancedText>
      You agree not to engage in any prohibited activities, including but not
      limited to spamming, harassment, or illegal activities.
    </CustomBalancedText>
  </ParentDiv>
);

export default UserConduct;

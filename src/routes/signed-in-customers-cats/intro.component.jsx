import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { catteryDetailsRoute, contactRoute } from "../../strings/routes";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

const Intro = () => (
  <ParentDiv>
    <CustomBalancedText>
      here are the details of your cats that we use in order to ensure proper
      care of your furry friends.
    </CustomBalancedText>
    <CustomBalancedText>
      if you would like any of these details changing, please{" "}
      <StyledLink to={contactRoute}>contact us</StyledLink>.
    </CustomBalancedText>
    <CustomBalancedText>
      if you would prefer to phone or visit, you can find our phone number and
      address <StyledLink to={catteryDetailsRoute}>here</StyledLink>.
    </CustomBalancedText>
  </ParentDiv>
);

export default Intro;

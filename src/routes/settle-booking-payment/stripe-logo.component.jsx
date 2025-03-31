import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { AnimatedDiv } from "../../styles/div/div.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => (
  <AnimatedDiv>
    <CustomBalancedText>Checkout Powered By:</CustomBalancedText>
    <StripeLogo />
  </AnimatedDiv>
);

export default AccountStripeLogo;

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { StripeLogoDiv } from "../../styles/div/div.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => (
  <StripeLogoDiv>
    <CustomBalancedText>Checkout Powered By:</CustomBalancedText>
    <StripeLogo />
  </StripeLogoDiv>
);

export default AccountStripeLogo;

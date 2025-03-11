import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import PhoneAndEmailIcons from "./phone-and-email-icons.component";
import EyeIcon from "./eye-icon.component";
import DownwardArrowIcon from "./downward-arrow-icon.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";

const ImageCredits = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">image credits</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        thank you to all of the following creators who have kindly provided
        images and icons for this product!
      </CustomBalancedText>
      <CustomBalancedText>
        please be sure to check out their work by tapping on the links below!
      </CustomBalancedText>
    </ParentDiv>

    <PhoneAndEmailIcons />
    <EyeIcon />
    <DownwardArrowIcon />

    <ParentDiv>
      <CustomBalancedText>
        are we missing an image attribution?
      </CustomBalancedText>
      <CustomBalancedText>
        please <StyledLink to={contactRoute}>contact me</StyledLink> with your
        details!
      </CustomBalancedText>
    </ParentDiv>

    <NextPolicyLink />
  </Container>
);

export default ImageCredits;

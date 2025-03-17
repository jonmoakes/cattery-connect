import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import PhoneAndEmailIcons from "./phone-and-email-icons.component";
import EyeIcon from "./eye-icon.component";
import DownwardArrowIcon from "./downward-arrow-icon.component";
import NextPolicyLink from "../../components/legal/next-policy-link/next-policy-link.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute } from "../../strings/routes";

const Credits = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">credits</CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        on this page, I would like to thank the creators of the images used in
        this app ( where the design is not my own ).
      </CustomBalancedText>
      <CustomBalancedText>
        I have also provided links to various products that I have used in the
        making of the app.
      </CustomBalancedText>
      <CustomBalancedText>
        please note that these are NOT affiliate links.
      </CustomBalancedText>
      <CustomBalancedText>
        they are just recognition of the great work of other people that have
        helped me in the creation of the app!
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
        images were resized to save space and reduce loading times using the
        following fantastic website:
      </CustomBalancedText>
      <CustomBalancedText>
        <a href="https://imageresizer.com/" target="_blank" rel="noreferrer">
          Image Resizer
        </a>
      </CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        images used in the 'about' page of this app with designed using the
        following fantastic product.
      </CustomBalancedText>
      <CustomBalancedText>
        <a href="https://app.shotsnapp.com" target="_blank" rel="noreferrer">
          shotsnapp
        </a>
      </CustomBalancedText>
    </ParentDiv>

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

export default Credits;

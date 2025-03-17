import ProgressiveImage from "../progressive-image/progressive-image.component";
import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ErrorFallbackImageDiv, ParentDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";

import image from "../../assets/sad-cat.webp";

const ErrorFallback = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">
        Sorry, there was an error,
        <br />
        'meowst' likely on our end...
      </CustomBalancedText>
      <ErrorFallbackImageDiv>
        <ProgressiveImage
          {...{ srcList: image, altText: "sad cat", className: "no-border" }}
        />
      </ErrorFallbackImageDiv>

      <CustomBalancedText>
        Please Try Checking Your internet Connection.
      </CustomBalancedText>

      <CustomBalancedText>
        if you're sure you're online, please try reloading the page by tapping
        the button below.
      </CustomBalancedText>
      <RadialTealButton onClick={() => window.location.reload()}>
        reload the page
      </RadialTealButton>
    </ParentDiv>
  </Container>
);

export default ErrorFallback;

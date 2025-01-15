import Balancer from "react-wrap-balancer";

import ProgressiveImage from "../progressive-image/progressive-image.component";

import { Container } from "../../styles/container/container.styles";
import { ErrorFallbackImageDiv, ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";

import image from "../../assets/sad-cat.webp";

const ErrorFallback = () => (
  <Container>
    <ParentDiv>
      <h1>
        <Balancer>
          Sorry, there was an error,
          <br />
          most likely on our end...
        </Balancer>
      </h1>
      <ErrorFallbackImageDiv>
        <ProgressiveImage {...{ image, altText: "sad cat" }} />
      </ErrorFallbackImageDiv>

      <p>Please Try Checking Your internet Connection.</p>

      <p>
        if you're sure you're online, please try reloading the page by tapping
        the button below.
      </p>
      <Button className="teal" onClick={() => window.location.reload()}>
        reload the page
      </Button>
    </ParentDiv>
  </Container>
);

export default ErrorFallback;

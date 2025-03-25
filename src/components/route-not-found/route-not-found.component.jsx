import { ParentDiv } from "../../styles/div/div.styles";
import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";

import FourOFourImage from "../../assets/404-image.webp";
import ProgressiveImage from "../progressive-image/progressive-image.component";

const RouteNotFound = () => (
  <Container>
    <ParentDiv>
      <CustomBalancedText type="h1">404 - page not found</CustomBalancedText>
    </ParentDiv>
    <ParentDiv>
      <ProgressiveImage
        {...{
          srcList: FourOFourImage,
          altText: "404 image",
        }}
      />
      <CustomBalancedText>
        Sorry, the page you're looking for doesn't exist.
      </CustomBalancedText>
      <CustomBalancedText>
        It might have been moved or deleted.
      </CustomBalancedText>
      <CustomBalancedText>
        please choose one of the other pages from the navigation bar at the top.
      </CustomBalancedText>
    </ParentDiv>
  </Container>
);

export default RouteNotFound;

import ProgressiveImage from "../../components/progressive-image/progressive-image.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import image from "../../assets/cat-in-cat-room.webp";
import { Button } from "../../styles/button/button.styles";
import { aboutRoute } from "../../strings/routes";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

const Home = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">
          Effortlessly Manage Your Cattery!
        </CustomBalancedText>
      </ParentDiv>
      <ParentDiv>
        <CustomBalancedText>Welcome to Cattery Connect!</CustomBalancedText>
        <CustomBalancedText>
          your comprehensive solution for efficient cattery management.
        </CustomBalancedText>
        <CustomBalancedText>
          Our platform streamlines your operations, allowing you to focus more
          on providing exceptional care to your feline guests.
        </CustomBalancedText>

        <ProgressiveImage
          {...{ srcList: image, altText: "a cat in a cattery" }}
        />

        <CustomBalancedText>
          With user-friendly booking management and seamless communication
          tools, managing your cattery has never been easier.
        </CustomBalancedText>

        <CustomBalancedText>
          Say goodbye to manual scheduling and administrative hassles, and
          embrace a more organised, efficient approach to running your cattery.
        </CustomBalancedText>
      </ParentDiv>

      <ParentDiv>
        <CustomBalancedText>find out more</CustomBalancedText>
        <Button
          className="teal"
          onClick={() => hamburgerHandlerNavigate(aboutRoute)}
        >
          about the app
        </Button>
      </ParentDiv>
    </Container>
  );
};

export default Home;

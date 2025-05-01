import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import Metadata from "../../components/metadata/metadata.component";
import ProgressiveImage from "../../components/progressive-image/progressive-image.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/button/button.styles";

import Image from "../../assets/cat-in-cattery.webp";

import { aboutRoute } from "../../strings/routes";

const Home = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Home"
        description="Welcome to Cattery Connect, your comprehensive solution for efficient cattery management. Streamline operations and focus on exceptional feline care."
        ogTitle="Cattery Connect - Home"
        ogDescription="Manage your cattery effortlessly with Cattery Connect. Streamlined booking, communication, and more."
      />

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
          {...{
            srcList: Image,
            altText: "a cat in a cattery",
            className: "landscape",
          }}
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

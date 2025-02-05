import ProgressiveImage from "../../components/progressive-image/progressive-image.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import image from "../../assets/cat-in-cat-room.webp";

const Home = () => {
  const altText = "a cat in a cattery";

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">
          book and manage your cat's stay whilst you're away!
        </CustomBalancedText>
      </ParentDiv>
      <ParentDiv>
        <CustomBalancedText>
          At Cattery Connect, we make it easy for you to book and manage your
          cat’s stay whilst you're away.
        </CustomBalancedText>
        <CustomBalancedText>
          Whether you're going on holiday, a business trip, or just need a
          reliable place for your feline friend, our platform ensures a seamless
          experience!
        </CustomBalancedText>

        <ProgressiveImage {...{ image, altText }} />

        <CustomBalancedText>
          With simple online booking, real-time updates, and easy communication
          with cattery owners, you can have peace of mind knowing your cat is in
          safe hands.
        </CustomBalancedText>
        <CustomBalancedText>
          Say goodbye to the stress of last minute arrangements and hello to a
          hassle free, tailored pet care experience.
        </CustomBalancedText>
      </ParentDiv>
    </Container>
  );
};

export default Home;

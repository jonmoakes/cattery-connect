import ProgressiveImage from "../../components/progressive-image/progressive-image.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

import image from "../../assets/cat-in-cat-room.webp";
import Balancer from "react-wrap-balancer";

const Home = () => {
  const altText = "a cat in a cattery";

  return (
    <Container>
      <ParentDiv>
        <h1>book and manage your cat's stay whilst you're away!</h1>
      </ParentDiv>
      <ParentDiv>
        <p>
          <Balancer>
            At Cattery Connect, we make it easy for you to book and manage your
            cat’s stay whilst you're away.
          </Balancer>
        </p>
        <p>
          <Balancer>
            Whether you're going on holiday, a business trip, or just need a
            reliable place for your feline friend, our platform ensures a
            seamless experience!
          </Balancer>
        </p>

        <ProgressiveImage {...{ image, altText }} />

        <p>
          <Balancer>
            With simple online booking, real-time updates, and easy
            communication with cattery owners, you can have peace of mind
            knowing your cat is in safe hands.
          </Balancer>
        </p>
        <p>
          <Balancer>
            Say goodbye to the stress of last minute arrangements and hello to a
            hassle free, tailored pet care experience.
          </Balancer>
        </p>
      </ParentDiv>
    </Container>
  );
};

export default Home;

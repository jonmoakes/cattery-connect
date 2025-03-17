import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import Image from "../../../assets/cat-asleep-in-basket.webp";
import { ParentDiv } from "../../../styles/div/div.styles";

const TitleAndIntro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h1">
        what is cattery connect?
      </CustomBalancedText>
    </ParentDiv>
    <ParentDiv>
      <CustomBalancedText>
        Welcome to Cattery Connect, the all-in-one booking and management system
        designed specifically for cattery owners.
      </CustomBalancedText>

      <ProgressiveImage
        {...{
          srcList: Image,
          altText: "cat asleep in a basket",
        }}
      />

      <CustomBalancedText>
        it works on all devices - phones, tablets, notebooks and desktops!
      </CustomBalancedText>
      <CustomBalancedText>
        it is also a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Progressive_web_app"
          target="_blank"
          rel="noreferrer"
        >
          progressive web app
        </a>{" "}
        which means that you can install it on your home screen for quick access
        just like you would an app downloaded from the apple app store or google
        play store!
      </CustomBalancedText>
      <CustomBalancedText>
        Our app makes it simple to manage bookings, track cat details, and
        streamline payments - all in one place.
      </CustomBalancedText>
      <CustomBalancedText>
        Whether you're running a small, family owned cattery or a larger
        establishment, Cattery Connect helps you stay organised and provide the
        best care for your feline guests.
      </CustomBalancedText>
      <CustomBalancedText>
        let's take a look at some of what you can do!
      </CustomBalancedText>
      <CustomBalancedText>( tap images to view full size )</CustomBalancedText>
    </ParentDiv>
  </>
);

export default TitleAndIntro;

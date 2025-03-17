import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

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

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../../styles/div/div.styles";

import { choosingCatsAboutPageImage } from "../../../../strings/image-urls";

const Intro = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h2">making a booking:</CustomBalancedText>

      <CustomBalancedText>
        Cattery owners can easily manage bookings through the app, eliminating
        the need for messy paperwork. Here’s how it works:
      </CustomBalancedText>
      <CustomBalancedText>
        Start by selecting a customer from your list of existing clients.
      </CustomBalancedText>
      <CustomBalancedText>
        Next, select the cats that will be part of this booking.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: choosingCatsAboutPageImage,
        altText: "choosing the cats in a booking",
        className: "no-border imac",
      }}
    />
  </>
);

export default Intro;

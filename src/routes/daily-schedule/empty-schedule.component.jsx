import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

import image from "../../assets/empty-cattery.webp";
import ProgressiveImage from "../../components/progressive-image/progressive-image.component";

const EmptySchedule = () => (
  <ParentDiv>
    <CustomBalancedText type="h2" className="teal">
      looks like a quiet day!
    </CustomBalancedText>
    <CustomBalancedText>
      there are No check in / check outs or 🐾 furry guests 🐾 today.
    </CustomBalancedText>

    <ProgressiveImage {...{ image, altText: "empty cat pen" }} />
  </ParentDiv>
);

export default EmptySchedule;

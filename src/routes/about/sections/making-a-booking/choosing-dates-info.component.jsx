import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../../components/progressive-image/progressive-image.component";
import { chooseDateAndSlotAboutPageImage } from "../../../../strings/image-urls";
import { ParentDiv } from "../../../../styles/div/div.styles";

const ChoosingDatesInfo = () => (
  <>
    <ParentDiv>
      <CustomBalancedText>
        Choose the check-in and check-out dates, along with the time slots that
        work best.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: chooseDateAndSlotAboutPageImage,
        altText: "choosing a date and time slot for a booking",
        className: "no-border imac",
      }}
    />
  </>
);

export default ChoosingDatesInfo;

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import { penAvailabilityAboutPageImage } from "../../../strings/image-urls";

const PenDataInfo = () => (
  <>
    <BlackHr />
    <ParentDiv>
      <CustomBalancedText type="h2">
        viewing pen availability:
      </CustomBalancedText>
      <CustomBalancedText>
        This feature allows you to view the number of available pens on any day
        you choose, for both morning and afternoon slots.
      </CustomBalancedText>
      <CustomBalancedText>
        It’s a great way to see your future availability at a glance, without
        the need to manually count how many bookings you have on a given day.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: penAvailabilityAboutPageImage,
        altText: "data on pen availability",
        className: "no-border imac",
      }}
    />
  </>
);

export default PenDataInfo;

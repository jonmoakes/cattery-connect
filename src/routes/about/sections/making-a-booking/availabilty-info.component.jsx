import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../../components/progressive-image/progressive-image.component";
import {
  bookingAvailableAboutPageImage,
  noAvailabilityAboutPageImage,
} from "../../../../strings/image-urls";
import { ParentDiv } from "../../../../styles/div/div.styles";

const AvailabilityInfo = () => (
  <>
    <ParentDiv>
      <CustomBalancedText>
        If any details are incorrect, you can easily make changes without having
        to start the process over.
      </CustomBalancedText>
      <CustomBalancedText>
        If the details look good, tap the 'Check Availability' button.
      </CustomBalancedText>
      <CustomBalancedText>
        The app will calculate if there are enough pens available for the
        selected dates and time slots. If there’s availability, you can confirm
        the booking.
      </CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText type="h3">
        prefer to manage your own pen availability?
      </CustomBalancedText>
      <CustomBalancedText>
        no problem! the app simply skips this step and allows you to decide if
        you have enough space for a booking.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: bookingAvailableAboutPageImage,
        altText: "a confirmation that the booking is available",
        className: "no-border imac",
      }}
    />

    <ParentDiv>
      <CustomBalancedText>
        If there’s no availability for one or more dates, the app will clearly
        show you which slots are unavailable. This prevents overbookings,
        ensuring you only confirm bookings that can be accommodated.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: noAvailabilityAboutPageImage,
        altText: "a confirmation that the booking is not available",
        className: "no-border imac",
      }}
    />
  </>
);

export default AvailabilityInfo;

import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../../components/progressive-image/progressive-image.component";
import { bookingCompletedAboutPageImage } from "../../../../strings/image-urls";
import { ParentDiv } from "../../../../styles/div/div.styles";

const BookingCompleteInfo = () => (
  <>
    <ParentDiv>
      <CustomBalancedText>
        Once the booking is confirmed, the pen availability data will be
        updated, and the booking will be added to the database. You can then
        view it in a convenient table.
      </CustomBalancedText>
      <CustomBalancedText>
        If the customer has provided an email address, you’ll have the option to
        automatically send them an email with their booking details.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: bookingCompletedAboutPageImage,
        altText: "booking completed confirmation",
        className: "no-border imac",
      }}
    />
  </>
);

export default BookingCompleteInfo;

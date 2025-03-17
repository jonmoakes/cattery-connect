import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../../components/progressive-image/progressive-image.component";
import { bookingDetailsAboutPageImage } from "../../../../strings/image-urls";
import { ParentDiv } from "../../../../styles/div/div.styles";

const PaymentStatusAndSummary = () => (
  <>
    <ParentDiv>
      <CustomBalancedText>
        Indicate whether the customer has already made a payment at the time of
        booking.
      </CustomBalancedText>
      <CustomBalancedText>
        You’ll be presented with a summary of the booking details. This allows
        you to double-check everything is correct.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: bookingDetailsAboutPageImage,
        altText: "final booking details",
        className: "no-border imac",
      }}
    />
  </>
);

export default PaymentStatusAndSummary;

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import ProgressiveImage from "../../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import {
  bookingsTableAboutPageImage,
  cancelBookingDetailsAboutPageImage,
} from "../../../strings/image-urls";
import { termsRoute } from "../../../strings/routes";

const BookingsTableInfo = () => (
  <>
    <BlackHr />
    <ParentDiv>
      <CustomBalancedText type="h2">viewing your bookings:</CustomBalancedText>
      <CustomBalancedText>
        You can view all of your bookings in one centralised table that is both
        searchable and sortable!
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: bookingsTableAboutPageImage,
        altText: "bookings table",
        className: "no-border imac",
      }}
    />

    <ParentDiv>
      <CustomBalancedText>
        Easily see who has or hasn't made a payment.
      </CustomBalancedText>
      <CustomBalancedText>
        When a payment is made, simply tap the 'Update Status' button to change
        it from incomplete to complete.
      </CustomBalancedText>
      <CustomBalancedText>
        Should you wish, you can also allow customers to make the payment for
        their booking directly within the app (small payment fees apply, which
        you can choose to pass on to the customer or not).
      </CustomBalancedText>
      <CustomBalancedText>
        The data in the table will be automatically updated when the payment is
        completed.
      </CustomBalancedText>
    </ParentDiv>

    <ParentDiv>
      <CustomBalancedText>
        If needed, you can easily cancel a booking by tapping on a row in the
        table.
      </CustomBalancedText>
      <CustomBalancedText>
        This will take you to a page where you can review the booking details
        and cancel it (sending an email confirmation if you wish) with just one
        click.
      </CustomBalancedText>
      <CustomBalancedText>
        Once cancelled, the pen availability will be updated in the database and
        the booking removed from your table.
      </CustomBalancedText>
      <CustomBalancedText>
        Please note that any refunds are handled between you and your customer –
        Cattery Connect is purely for database management and, if applicable,
        processing an initial payment from the customer to you.
      </CustomBalancedText>
      <CustomBalancedText>
        For full details, please see our{" "}
        <StyledLink to={termsRoute}>Terms and conditions</StyledLink>.
      </CustomBalancedText>
    </ParentDiv>

    <ProgressiveImage
      {...{
        srcList: cancelBookingDetailsAboutPageImage,
        altText: "details of a booking to cancel",
        className: "no-border imac",
      }}
    />
  </>
);

export default BookingsTableInfo;

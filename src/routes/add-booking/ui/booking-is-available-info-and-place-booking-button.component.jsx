import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../../styles/button/button.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BookingWrapper } from "../../../styles/div/div.styles";
import ConfirmPlaceBookingButton from "./confirm-place-booking-button.component";

const BookingIsAvailableInfoAndPlaceBookingButton = ({
  availabilityStatus,
  confirmPlaceBooking,
  handleChangeDetailsRequest,
}) => (
  <>
    {availabilityStatus === "bookingAvailable" ? (
      <>
        <BookingWrapper className="available">
          <CustomBalancedText>
            good news - this booking slot is available!
            <br />
            😺
          </CustomBalancedText>

          <CustomBalancedText>
            please tap the button below to confirm!
          </CustomBalancedText>

          <ConfirmPlaceBookingButton {...{ confirmPlaceBooking }} />
        </BookingWrapper>

        <BlackHr />

        <CustomBalancedText>
          need to change the booking details?
        </CustomBalancedText>

        <CustomBalancedText>
          click below and then modify required details.
        </CustomBalancedText>

        <CustomBalancedText>
          once you have finished making changes, tap the check availability
          button again.
        </CustomBalancedText>

        <Button
          type="button"
          className="red"
          onClick={handleChangeDetailsRequest}
        >
          change details
        </Button>

        <BlackHr />
      </>
    ) : null}
  </>
);

export default BookingIsAvailableInfoAndPlaceBookingButton;

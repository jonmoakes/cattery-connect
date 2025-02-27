import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";

import useConfirmPlaceBooking from "../add-booking-hooks/use-confirm-place-booking";
import useHandleChangeDetailsRequest from "../add-booking-hooks/use-handle-change-details-request";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../../styles/button/button.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BookingWrapper } from "../../../styles/div/div.styles";

const BookingIsAvailableInfoAndPlaceBookingButton = () => {
  const { availabilityStatus } = useGetIsBookingAvailableSelectors();
  const { confirmPlaceBooking } = useConfirmPlaceBooking();
  const { handleChangeDetailsRequest } = useHandleChangeDetailsRequest();

  return (
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

            <Button type="button" onClick={confirmPlaceBooking}>
              complete booking
            </Button>
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
};

export default BookingIsAvailableInfoAndPlaceBookingButton;

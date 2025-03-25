import { Button } from "../../../styles/button/button.styles";
import ConfirmPlaceBookingButton from "./confirm-place-booking-button.component";

const CheckAvailabilityOrConfirmBookingButton = ({
  managesOwnPens,
  availabilityStatus,
  confirmPlaceBooking,
}) => (
  <>
    {managesOwnPens ? (
      <ConfirmPlaceBookingButton {...{ confirmPlaceBooking }} />
    ) : !managesOwnPens && availabilityStatus !== "bookingAvailable" ? (
      <Button type="submit" className="margin">
        check availability
      </Button>
    ) : null}
  </>
);

export default CheckAvailabilityOrConfirmBookingButton;

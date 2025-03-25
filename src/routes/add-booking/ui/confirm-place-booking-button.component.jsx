import { Button } from "../../../styles/button/button.styles";

const ConfirmPlaceBookingButton = ({ confirmPlaceBooking }) => (
  <Button type="button" onClick={confirmPlaceBooking}>
    complete booking
  </Button>
);

export default ConfirmPlaceBookingButton;

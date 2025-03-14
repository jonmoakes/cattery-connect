import { Button } from "../../../styles/button/button.styles";

const CheckAvailabilityButton = ({ availabilityStatus }) => (
  <>
    {availabilityStatus !== "bookingAvailable" ? (
      <Button type="submit" className="margin">
        check availability
      </Button>
    ) : null}
  </>
);

export default CheckAvailabilityButton;

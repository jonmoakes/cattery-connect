import useGetIsBookingAvailableSelectors from "../../../hooks/selectors/use-get-is-booking-available-selectors";

import { Button } from "../../../styles/button/button.styles";

const CheckAvailabilityButton = () => {
  const { availabilityStatus } = useGetIsBookingAvailableSelectors();
  return (
    <>
      {availabilityStatus !== "bookingAvailable" ? (
        <Button type="submit" className="margin">
          check availability
        </Button>
      ) : null}
    </>
  );
};

export default CheckAvailabilityButton;

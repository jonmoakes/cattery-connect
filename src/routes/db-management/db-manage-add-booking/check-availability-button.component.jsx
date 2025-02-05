import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { Button } from "../../../styles/button/button.styles";

const CheckAvailabilityButton = () => {
  const { status } = useGetDbManageAddBookingSelectors();
  return (
    <>
      {status !== "bookingAvailable" ? (
        <Button type="submit" className="margin">
          check availability
        </Button>
      ) : null}
    </>
  );
};

export default CheckAvailabilityButton;

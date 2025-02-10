import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";
import useAddBookingFunctions from "./db-manage-add-booking-hooks/use-add-booking-functions";
import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../../styles/button/button.styles";

import { BlackHr } from "../../../styles/hr/hr.styles";

const BookingIsAvailableInfoAndPlaceBookingButton = () => {
  const { status } = useGetDbManageAddBookingSelectors();
  const { confirmPlaceBooking, handleChangeDetailsRequest } =
    useAddBookingFunctions();

  return (
    <>
      {status === "bookingAvailable" ? (
        <>
          <CustomBalancedText color="white">
            good news - this booking slot is available!😺
          </CustomBalancedText>

          <CustomBalancedText color="white">
            tap the button below to confirm!
          </CustomBalancedText>

          <Button type="button" onClick={confirmPlaceBooking}>
            complete booking
          </Button>

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

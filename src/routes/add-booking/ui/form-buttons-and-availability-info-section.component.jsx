import ShowBookingData from "../../../components/show-booking-data/show-booking-data.component";
import FailedDatesInfo from "./failed-dates-info.component";
import CheckAvailabilityButton from "./check-availability-button.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./booking-is-available-info-and-place-booking-button.component";

const FormButtonsAndAvailabilityInfoSection = ({
  bookingDataToShow,
  noAvailabilityRef,
  bookingNotAvailableAndHasFailingDates,
  showIneligibleDates,
  failingDates,
  bookingNotAvailableAndNoFailingDates,
  availabilityStatus,
  bookingIsAvailableRef,
  confirmPlaceBooking,
  handleChangeDetailsRequest,
}) => (
  <>
    <ShowBookingData {...{ bookingDataToShow }} />
    <div ref={noAvailabilityRef}>
      <FailedDatesInfo
        {...{
          bookingNotAvailableAndHasFailingDates,
          showIneligibleDates,
          failingDates,
          bookingNotAvailableAndNoFailingDates,
        }}
      />
    </div>
    <CheckAvailabilityButton {...{ availabilityStatus }} />
    <div ref={bookingIsAvailableRef}>
      <BookingIsAvailableInfoAndPlaceBookingButton
        {...{
          availabilityStatus,
          confirmPlaceBooking,
          handleChangeDetailsRequest,
        }}
      />
    </div>
  </>
);

export default FormButtonsAndAvailabilityInfoSection;

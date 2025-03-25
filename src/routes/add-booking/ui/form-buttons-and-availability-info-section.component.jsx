import ShowBookingData from "../../../components/show-booking-data/show-booking-data.component";
import FailedDatesInfo from "./failed-dates-info.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./booking-is-available-info-and-place-booking-button.component";
import CheckAvailabilityOrConfirmBookingButton from "./check-availability-or-confirm-booking-button.component";

const FormButtonsAndAvailabilityInfoSection = ({
  bookingDataToShow,
  managesOwnPens,
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
    <ShowBookingData {...{ bookingDataToShow, managesOwnPens }} />

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

    <CheckAvailabilityOrConfirmBookingButton
      {...{ managesOwnPens, availabilityStatus, confirmPlaceBooking }}
    />

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

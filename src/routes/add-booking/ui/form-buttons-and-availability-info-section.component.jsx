import ShowBookingData from "../../../components/show-booking-data/show-booking-data.component";
import FailedDatesInfo from "./failed-dates-info.component";
import BookingIsAvailableInfoAndPlaceBookingButton from "./booking-is-available-info-and-place-booking-button.component";
import CheckAvailabilityOrConfirmBookingButton from "./check-availability-or-confirm-booking-button.component";
import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { ErrorDiv } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { contactRoute } from "../../../strings/routes";

const FormButtonsAndAvailabilityInfoSection = ({
  totalCost,
  bookingDataToShow,
  hasAdditionalCosts,
  additionalCosts,
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
    {totalCost === "missing data" ? (
      <ErrorDiv className="red">
        <CustomBalancedText>
          we are missing the data required to calculate the cost of this stay.
        </CustomBalancedText>
        <CustomBalancedText>
          most likely, the pricing for the selected number of cats is missing.
        </CustomBalancedText>
        <CustomBalancedText>
          please{" "}
          <StyledLink className="yellow" to={contactRoute}>
            Contact jonathan
          </StyledLink>
          .
        </CustomBalancedText>
      </ErrorDiv>
    ) : (
      <>
        <ShowBookingData
          {...{
            bookingDataToShow,
            hasAdditionalCosts,
            additionalCosts,
            managesOwnPens,
          }}
        />

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
    )}
  </>
);

export default FormButtonsAndAvailabilityInfoSection;

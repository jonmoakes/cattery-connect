import { useDispatch } from "react-redux";
import { format } from "date-fns";

import { setShowIneligibleDates } from "../../../store/is-booking-available/is-booking-available.slice";

import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";

import { BookingWrapper, DataDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../styles/button/button.styles";

const FailedDatesInfo = ({
  bookingNotAvailableAndHasFailingDates,
  showIneligibleDates,
  failingDates,
  bookingNotAvailableAndNoFailingDates,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {bookingNotAvailableAndHasFailingDates ? (
        <BookingWrapper className="unavailable">
          {!showIneligibleDates ? (
            <>
              <CustomBalancedText>
                this booking can't be completed because some date(
                <CustomSpan type="lowercase">s</CustomSpan>) and slot(
                <CustomSpan type="lowercase">s</CustomSpan>) dont have any
                availability:
              </CustomBalancedText>
              <BlackHr />
            </>
          ) : null}
          <MinimalButton
            type="button"
            className="margin"
            onClick={() =>
              dispatch(setShowIneligibleDates(!showIneligibleDates))
            }
          >
            {showIneligibleDates ? "hide dates" : "show ineligible Dates"}
          </MinimalButton>
          <BlackHr />
          {showIneligibleDates ? (
            <>
              <CustomBalancedText>
                the following date(
                <CustomSpan type="lowercase">s</CustomSpan>) and slot(
                <CustomSpan type="lowercase">s</CustomSpan>) dont have any
                availability:
              </CustomBalancedText>
              {failingDates.map((failingDate) => {
                const { id, date, slot } = failingDate;

                return (
                  <DataDiv key={id} className="error">
                    <CustomBalancedText className="white">
                      date:
                      <br />
                      <CustomSpan className="yellow">
                        {format(date, "dd MMMM yyyy")}
                      </CustomSpan>
                    </CustomBalancedText>
                    <CustomBalancedText className="white">
                      slot:
                      <br />
                      <CustomSpan type="uppercase" className="yellow">
                        {slot}
                      </CustomSpan>
                    </CustomBalancedText>
                    <BlackHr />
                  </DataDiv>
                );
              })}
            </>
          ) : null}
          <CustomBalancedText>
            you can try changing the booking details and then tap the button
            below again, otherwise this booking can't be made 😿
          </CustomBalancedText>
        </BookingWrapper>
      ) : bookingNotAvailableAndNoFailingDates ? (
        <DataDiv className="error">
          <CustomBalancedText className="white">
            sorry, there was an error showing which dates are unavailable..
          </CustomBalancedText>
          <CustomBalancedText className="white">
            if you continue to se this error, please contact jonathan.
          </CustomBalancedText>
        </DataDiv>
      ) : null}
    </>
  );
};

export default FailedDatesInfo;

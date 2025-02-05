import { format } from "date-fns";
import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { WhiteText } from "../../../styles/p/p.styles";
import { DataDiv } from "../../../styles/div/div.styles";
import {
  LowercasedSpan,
  UppercaseSpan,
  YellowSpan,
} from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { MinimalButton } from "../../../styles/button/button.styles";
import { useDispatch } from "react-redux";
import { setShowIneligibleDates } from "../../../store/db-manage-add-booking/db-manage-add-booking.slice";

const FailedDatesInfo = () => {
  const { status, failingDates, showIneligibleDates } =
    useGetDbManageAddBookingSelectors();
  const dispatch = useDispatch();

  return (
    <>
      {status === "bookingNotAvailable" &&
      failingDates &&
      failingDates.length ? (
        <>
          <WhiteText>
            <Balancer>
              this booking can't be completed because some date(
              <LowercasedSpan>s</LowercasedSpan>) and / or slot(
              <LowercasedSpan>s</LowercasedSpan>) dont have enough availability:
            </Balancer>
          </WhiteText>
          <BlackHr />
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
              {failingDates.map((failingDate) => {
                const { id, date, slot } = failingDate;

                return (
                  <DataDiv key={id} className="error">
                    <WhiteText>
                      date:
                      <br />
                      <YellowSpan>{format(date, "dd MMMM yyyy")}</YellowSpan>
                    </WhiteText>
                    <WhiteText>
                      slot:
                      <br />
                      <UppercaseSpan className="yellow">{slot}</UppercaseSpan>
                    </WhiteText>
                    <BlackHr />
                  </DataDiv>
                );
              })}
            </>
          ) : null}
          <WhiteText>
            <Balancer>
              you can try changing the booking details and then tap the
            </Balancer>
          </WhiteText>
          <WhiteText>'check availability'</WhiteText>
          <WhiteText>
            <Balancer>
              button below again, otherwise this booking can't be made 😿
            </Balancer>
          </WhiteText>
          <BlackHr />
        </>
      ) : status === "bookingNotAvailable" && !failingDates ? (
        <DataDiv className="error">
          <WhiteText>
            sorry, there was an error showing which dates are unavailable..
          </WhiteText>
          <WhiteText>
            if you continue to se this error, please contact jonathan.
          </WhiteText>
        </DataDiv>
      ) : null}
    </>
  );
};

export default FailedDatesInfo;

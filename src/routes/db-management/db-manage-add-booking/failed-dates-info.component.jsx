import { format } from "date-fns";
import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { WhiteText } from "../../../styles/p/p.styles";
import { DataDiv } from "../../../styles/div/div.styles";
import { UppercaseSpan, YellowSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const FailedDatesInfo = () => {
  const { status, failingDates } = useGetDbManageAddBookingSelectors();

  return (
    <>
      {status === "bookingNotAvailable" &&
      failingDates &&
      failingDates.length ? (
        <>
          <WhiteText>
            <Balancer>
              this booking can't be completed because the following dates and
              slots dont have enough availability:
            </Balancer>
          </WhiteText>
          {failingDates.map((failingDate) => {
            const { id, date, slot } = failingDate;

            console.log(date);

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
          <WhiteText>
            <Balancer>
              you can try changing the booking details to try and find any
              availability, otherwise this booking can't be made 😿
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

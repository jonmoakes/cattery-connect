import { format } from "date-fns";
import Balancer from "react-wrap-balancer";

import useGetDbManageAddBookingSelectors from "../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import { DataDiv } from "../../../styles/div/div.styles";
import { UppercaseSpan, YellowSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ShowBookingDataBeforeBooking = () => {
  const {
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
  } = useGetDbManageAddBookingSelectors();

  return (
    <DataDiv>
      <h3 className="white">booking details:</h3>
      <ul>
        <li>
          customer name:
          <br />
          <YellowSpan>{customerName}</YellowSpan>
        </li>
        <BlackHr />
        <li>
          cats in the booking:
          <br />
          <YellowSpan>
            {catsInBooking &&
              catsInBooking.map((str) => str.split(" ")).join(", ")}
          </YellowSpan>
        </li>
        <BlackHr />
        <li>
          check in date:
          <br />
          <YellowSpan>{format(checkInDate, "EEEE dd MMMM yyyy")}</YellowSpan>
        </li>
        <BlackHr />
        <li>
          check in slot:
          <br />
          <UppercaseSpan className="yellow">{checkInSlot}</UppercaseSpan>
        </li>
        <BlackHr />
        <li>
          check out date:
          <br />
          <YellowSpan>{format(checkOutDate, "EEEE dd MMMM yyyy")}</YellowSpan>
        </li>
        <BlackHr />
        <li>
          check out slot:
          <br />
          <UppercaseSpan className="yellow">{checkOutSlot}</UppercaseSpan>
        </li>
        <BlackHr />
      </ul>
      <p>
        <Balancer>
          if you are happy with these details, tap the 'add booking' button
          below to check for availability.
        </Balancer>
      </p>
      <p>
        <Balancer>
          if availability is confirmed, you will have chance to confirm again
          before making the booking.
        </Balancer>
      </p>
    </DataDiv>
  );
};

export default ShowBookingDataBeforeBooking;

import { format } from "date-fns";

import useGetDbManageAddBookingSelectors from "../../../../hooks/selectors/use-get-db-manage-add-booking-selectors";

import CustomSpan from "../../../../components/custom-span/custom-span.component";
import CustomBalancedText from "../../../../components/custom-balanced-text/custom-balanced-text.component";

import { BookingWrapper, DataDiv } from "../../../../styles/div/div.styles";
import { BlackHr } from "../../../../styles/hr/hr.styles";

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
    <BookingWrapper>
      <DataDiv>
        <CustomBalancedText type="h3">booking details:</CustomBalancedText>
        <ul>
          <li>
            customer name:
            <br />
            <CustomSpan className="yellow">{customerName}</CustomSpan>
          </li>
          <BlackHr />
          <li>
            cats in the booking:
            <br />
            <CustomSpan className="yellow">
              {catsInBooking &&
                catsInBooking.map((str) => str.split(" ")).join(", ")}
            </CustomSpan>
          </li>
          <BlackHr />
          <li>
            check in date:
            <br />
            <CustomSpan className="yellow">
              {format(checkInDate, "EEE dd MMMM yyyy")}
            </CustomSpan>
          </li>
          <BlackHr />
          <li>
            check in slot:
            <br />
            <CustomSpan type="uppercase" className="yellow">
              {checkInSlot}
            </CustomSpan>
          </li>
          <BlackHr />
          <li>
            check out date:
            <br />
            <CustomSpan className="yellow">
              {format(checkOutDate, "EEE dd MMMM yyyy")}
            </CustomSpan>
          </li>
          <BlackHr />
          <li>
            check out slot:
            <br />
            <CustomSpan type="uppercase" className="yellow">
              {checkOutSlot}
            </CustomSpan>
          </li>
          <BlackHr />
        </ul>
        <CustomBalancedText>
          if you are happy with these details, tap the 'check availability'
          button below.
        </CustomBalancedText>
        <CustomBalancedText>
          if availability is confirmed, you will have chance to confirm again
          before making the booking.
        </CustomBalancedText>
      </DataDiv>
    </BookingWrapper>
  );
};

export default ShowBookingDataBeforeBooking;

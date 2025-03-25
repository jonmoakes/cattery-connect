import { format } from "date-fns";
import { BookingWrapper, DataDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";
import { useLocation } from "react-router-dom";
import { addBookingRoute, cancelBookingRoute } from "../../strings/routes";

const ShowBookingData = ({ bookingDataToShow, managesOwnPens }) => {
  const {
    bookingId,
    customerName,
    catsInBooking,
    checkInDate,
    checkInSlot,
    checkOutDate,
    checkOutSlot,
    paymentStatus,
  } = bookingDataToShow;

  const location = useLocation();
  const path = location.pathname;

  return (
    <BookingWrapper>
      <DataDiv>
        <CustomBalancedText type="h3">
          {path === addBookingRoute
            ? "booking details"
            : path === cancelBookingRoute && "details of the booking to cancel"}
          :
        </CustomBalancedText>
        <BlackHr />
        <ul>
          {path === cancelBookingRoute ? (
            <>
              <li>
                booking ID
                <br /> <CustomSpan className="yellow">{bookingId}</CustomSpan>
              </li>{" "}
              <BlackHr />
            </>
          ) : null}
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
              {path === addBookingRoute && catsInBooking
                ? catsInBooking.map((str) => str.split(" ")).join(", ")
                : path === cancelBookingRoute && catsInBooking}
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

          <li>
            payment status:
            <br />
            <CustomSpan className="yellow">{paymentStatus}</CustomSpan>
          </li>
          <BlackHr />
        </ul>

        {path === addBookingRoute ? (
          <>
            {managesOwnPens ? (
              <>
                <CustomBalancedText>
                  if you are happy with these details, tap the 'complete
                  booking' button below.
                </CustomBalancedText>
                <CustomBalancedText>
                  otherwise, change any data in the form above and then come
                  back to this point.
                </CustomBalancedText>
              </>
            ) : (
              <>
                <CustomBalancedText>
                  if you are happy with these details, tap the 'check
                  availability' button below.
                </CustomBalancedText>
                <CustomBalancedText>
                  if availability is confirmed, you will have chance to confirm
                  again before making the booking.
                </CustomBalancedText>
              </>
            )}
          </>
        ) : (
          path === cancelBookingRoute && (
            <>
              <CustomBalancedText>
                if you wish to proceed with the cancellation, tap the 'confirm
                cancel' button below.
              </CustomBalancedText>
              <CustomBalancedText>
                please note that the data is not recoverable once deleted.
              </CustomBalancedText>
            </>
          )
        )}
      </DataDiv>
    </BookingWrapper>
  );
};

export default ShowBookingData;

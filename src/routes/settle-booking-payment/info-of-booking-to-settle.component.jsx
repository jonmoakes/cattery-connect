import useGetSignedInCustomersBookingsSelectors from "../../hooks/selectors/use-get-signed-in-customers-bookings-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import useSettleBookingPaymentVariables from "./hooks/use-settle-booking-payment-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { DataDetailsDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { getCatteryName } from "../../functions/get-cattery-name";

const InfoOfBookingToSettle = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const { bookingId, checkInDate, checkOutDate, catsInBooking, totalCost } =
    useGetSignedInCustomersBookingsSelectors();
  const { lengthOfStay, formattedDate } = useSettleBookingPaymentVariables();

  return (
    <DataDetailsDiv className="with-background">
      <BlackHr />
      <CustomBalancedText>
        you have chosen to make a payment for the following booking to:
      </CustomBalancedText>

      <CustomBalancedText className="red">
        {getCatteryName(catteryId)}
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">booking id:</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">{bookingId}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />

      <CustomBalancedText type="h3">check In Date:</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">{formattedDate(checkInDate)}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />

      <CustomBalancedText type="h3">check out Date</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">{formattedDate(checkOutDate)}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />

      <CustomBalancedText type="h3">cats in the booking:</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">{catsInBooking}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />

      <CustomBalancedText type="h3">duration of booking:</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">{lengthOfStay} nights</CustomSpan>
      </CustomBalancedText>
      <BlackHr />

      <CustomBalancedText type="h3">total cost of booking:</CustomBalancedText>
      <CustomBalancedText>
        <CustomSpan className="red">£{(totalCost / 100).toFixed(2)}</CustomSpan>
      </CustomBalancedText>
      <BlackHr />
    </DataDetailsDiv>
  );
};

export default InfoOfBookingToSettle;

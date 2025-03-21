import { useDispatch } from "react-redux";

import { setBookingConfirmationDetailsInfo } from "../../store/signed-in-customers-bookings/signed-in-customers-bookings.slice";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomSpan from "../custom-span/custom-span.component";

import { MinimalButton } from "../../styles/button/button.styles";

import { settleBookingPaymentRoute } from "../../strings/routes";

const SettlePaymentCell = ({ row }) => {
  const {
    $id,
    bookingId,
    paymentStatus,
    totalCost,
    checkInDate,
    checkOutDate,
    catsInBooking,
  } = row.original;
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const setPaymentDetailsAndGoToPaymentRoute = () => {
    dispatch(
      setBookingConfirmationDetailsInfo({
        $id,
        bookingId,
        checkInDate,
        checkOutDate,
        catsInBooking,
        totalCost,
      })
    );
    hamburgerHandlerNavigate(settleBookingPaymentRoute);
  };

  return (
    <>
      {paymentStatus === "complete" ? (
        <CustomSpan>{paymentStatus}</CustomSpan>
      ) : (
        <>
          <CustomSpan className="red">{paymentStatus}</CustomSpan>
          <br />
          <MinimalButton
            type="button"
            className="settle-payment"
            onClick={setPaymentDetailsAndGoToPaymentRoute}
          >
            settle
          </MinimalButton>
        </>
      )}
    </>
  );
};

export default SettlePaymentCell;

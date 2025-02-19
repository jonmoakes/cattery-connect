import useFireSwal from "../../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { bookingsRoute } from "../../../../strings/routes";
import useCancelBookingVariables from "../use-cancel-booking-variables";
import { useDispatch } from "react-redux";
import { sendCustomerCancellationEmailAsync } from "../../../../store/send-email/send-email.thunks";

const useBookingCancelledSuccessSwal = () => {
  const { customerEmail, dataFromBooking, name, phone, catteryEmail } =
    useCancelBookingVariables();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const bookingCancelledSuccessSwal = (setSwalConfirmed) => {
    if (!customerEmail) {
      fireSwal(
        "success",
        "booking cancelled!",
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookingsRoute);
        }
      });
    } else if (customerEmail) {
      setSwalConfirmed(true);
      confirmSwal(
        "booking cancelled! would you like to send the customer an email confirmation?",
        "",
        `yes`,
        "no",
        () =>
          dispatch(
            sendCustomerCancellationEmailAsync({
              dataFromBooking,
              catteryName: name,
              phone,
              catteryEmail,
            })
          ),
        () => hamburgerHandlerNavigate(bookingsRoute)
      );
    }
  };

  return { bookingCancelledSuccessSwal };
};

export default useBookingCancelledSuccessSwal;

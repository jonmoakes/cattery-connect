import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetCatteryDetailsSelectors from "../../../../hooks/selectors/use-get-cattery-details-selectors";
import { sendCustomerCancellationEmailAsync } from "../../../../store/send-email/send-email.thunks";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { bookingsRoute } from "../../../../strings/routes";

const useHasEmailSuccessSwal = () => {
  const { dataFromBooking } = useGetCancelBookingSelectors();
  const { name, phone, catteryEmail } = useGetCatteryDetailsSelectors();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const hasEmailSuccessSwal = useCallback(() => {
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
  }, [
    catteryEmail,
    confirmSwal,
    dataFromBooking,
    dispatch,
    hamburgerHandlerNavigate,
    name,
    phone,
  ]);

  return { hasEmailSuccessSwal };
};

export default useHasEmailSuccessSwal;

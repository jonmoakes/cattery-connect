import { useDispatch } from "react-redux";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import { sendCustomerCancellationEmailAsync } from "../../../../store/send-email/send-email.thunks";
import useGetCancelBookingSelectors from "../../../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { bookingsRoute } from "../../../../strings/routes";
import { useCallback } from "react";

const useHasEmailSuccessSwal = () => {
  const { dataFromBooking } = useGetCancelBookingSelectors();
  const { name, phone, catteryEmail } =
    useGetRequiredCatteryDataForBookingSelectors();
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

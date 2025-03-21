import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetBookingsSelectors from "../../../hooks/selectors/use-get-bookings-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";

import useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal from "./swals/use-error-updating-payment-status-of-booking-after-successful-payment-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { signedInCustomersBookingsRoute } from "../../../strings/routes";

const useUpdatePaymentStatusOfBookingAfterSuccessfulPaymentResult = () => {
  const { updatePaymentStatusResult, updatePaymentStatusError } =
    useGetBookingsSelectors();
  const { documentIdOfBooking } = useGetHandlePaymentSelectors();

  const { errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal } =
    useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updatePaymentStatusResult && !updatePaymentStatusError) return;

    if (updatePaymentStatusResult === "fulfilled") {
      hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
    } else if (updatePaymentStatusError) {
      errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal(
        documentIdOfBooking
      );
    }
  }, [
    dispatch,
    hamburgerHandlerNavigate,
    updatePaymentStatusResult,
    updatePaymentStatusError,
    documentIdOfBooking,

    errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal,
  ]);
};

export default useUpdatePaymentStatusOfBookingAfterSuccessfulPaymentResult;

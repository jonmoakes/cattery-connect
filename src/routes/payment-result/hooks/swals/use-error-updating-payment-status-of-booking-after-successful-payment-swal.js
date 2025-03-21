import { useCallback } from "react";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { signedInCustomersBookingsRoute } from "../../../../strings/routes";

const useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal =
    useCallback(
      (documentIdOfBooking) => {
        fireSwal(
          "info",
          "payment successful!",
          "however, there was an error updating the payment status of your booking. when you tap ok, we will send an email to the cattery owner to update this manually. please DO NOT attempt to make this payment again as it has already been successful!",
          0,
          "",
          false,
          "",
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            console.log(documentIdOfBooking);
            hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
          }
        });
      },
      [fireSwal, hamburgerHandlerNavigate]
    );

  return { errorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal };
};

export default useErrorUpdatingPaymentStatusOfBookingAfterSuccessfulPaymentSwal;

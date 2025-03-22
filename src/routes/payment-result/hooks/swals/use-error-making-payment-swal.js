import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { signedInCustomersBookingsRoute } from "../../../../strings/routes";
import { paymentDeclinedMessage } from "../../../../strings/errors";

const useErrorMakingPaymentSwal = () => {
  const { fireSwal } = useFireSwal();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const errorMakingPaymentSwal = useCallback(
    (errorObject) => {
      const { message } = errorObject;

      fireSwal(
        "error",
        paymentDeclinedMessage(message),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
        }
      });
    },
    [fireSwal, hamburgerHandlerNavigate]
  );

  return { errorMakingPaymentSwal };
};

export default useErrorMakingPaymentSwal;

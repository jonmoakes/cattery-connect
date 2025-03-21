import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetHandlePaymentState } from "../../../../store/handle-payment/handle-payment-slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { signedInCustomersBookingsRoute } from "../../../../strings/routes";
import { paymentDeclinedMessage } from "../../../../strings/errors";

const useErrorMakingPaymentSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
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
          dispatch(resetHandlePaymentState());
          hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
        }
      });
    },
    [dispatch, fireSwal, hamburgerHandlerNavigate]
  );

  return { errorMakingPaymentSwal };
};

export default useErrorMakingPaymentSwal;

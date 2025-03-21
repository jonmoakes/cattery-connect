import { useEffect } from "react";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { paymentResultRoute } from "../../../strings/routes";

const useWaitForPaymentStatusResultUseEffect = () => {
  const { dontHavePaymentResultYet } = useGetHandlePaymentSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (dontHavePaymentResultYet) return;
    hamburgerHandlerNavigate(paymentResultRoute);
  }, [dontHavePaymentResultYet, hamburgerHandlerNavigate]);
};

export default useWaitForPaymentStatusResultUseEffect;

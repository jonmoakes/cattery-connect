import { useCallback } from "react";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../strings/routes";

const usePriceUpdatedSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const priceUpdatedSuccessSwal = useCallback(() => {
    fireSwal("success", "price updated!", "", 0, "", false, "", false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      }
    );
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { priceUpdatedSuccessSwal };
};

export default usePriceUpdatedSuccessSwal;

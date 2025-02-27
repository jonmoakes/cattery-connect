import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../strings/routes";

const useSendEmailSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailSuccessSwal = useCallback(() => {
    fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      }
    );
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { sendEmailSuccessSwal };
};

export default useSendEmailSuccessSwal;

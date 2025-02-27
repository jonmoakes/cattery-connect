import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { bookingsRoute } from "../../../../strings/routes";

const useEmailSentSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const emailSentSuccessSwal = useCallback(() => {
    fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(bookingsRoute);
        }
      }
    );
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { emailSentSuccessSwal };
};

export default useEmailSentSuccessSwal;

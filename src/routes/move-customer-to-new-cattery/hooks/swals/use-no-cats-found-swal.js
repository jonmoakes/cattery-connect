import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { noCatsToUpdateMessage } from "../../../../strings/info";
import { accountRoute } from "../../../../strings/routes";

const useNoCatsFoundSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const noCatsFoundSwal = useCallback(() => {
    fireSwal("info", noCatsToUpdateMessage, "", 0, "", false, "", false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      }
    );
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { noCatsFoundSwal };
};

export default useNoCatsFoundSwal;

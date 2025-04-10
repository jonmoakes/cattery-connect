import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../strings/routes";

const useDeleteDateDocumentsSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const deleteDateDocumentsSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      "all documents deleted",
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(accountRoute);
      }
    });
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { deleteDateDocumentsSuccessSwal };
};

export default useDeleteDateDocumentsSuccessSwal;

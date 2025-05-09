import { useCallback } from "react";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { bookingsRoute } from "../../../../strings/routes";

const useNoEmailSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const noEmailSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      `booking cancelled! 
      
as the customer has no email address on file, we cannot send an email receipt.`,
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(bookingsRoute);
      }
    });
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { noEmailSuccessSwal };
};

export default useNoEmailSuccessSwal;

import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { accountRoute } from "../../../../strings/routes";

const useBookingSuccessNoEmailSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmSwal } = useConfirmSwal();

  const bookingSuccessNoEmailSwal = useCallback(() => {
    fireSwal(
      "success",
      `booking completed!

 as the customer has no email address on file, we cannot send an email receipt.`,
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        confirmSwal(
          "would you like to make another booking?",
          "",
          `yes`,
          "no",
          () => window.location.reload(),
          () => hamburgerHandlerNavigate(accountRoute)
        );
      }
    });
  }, [confirmSwal, fireSwal, hamburgerHandlerNavigate]);

  return { bookingSuccessNoEmailSwal };
};

export default useBookingSuccessNoEmailSwal;

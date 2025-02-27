import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { updatePenRollbackErrorEmailSentMessage } from "../../../../strings/info";
import { accountRoute } from "../../../../strings/routes";

const useSendEmailSuccessWithUpdatePensErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailSuccessWithUpdatePensErrorSwal = useCallback(() => {
    fireSwal(
      "success",
      updatePenRollbackErrorEmailSentMessage,
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

  return { sendEmailSuccessWithUpdatePensErrorSwal };
};

export default useSendEmailSuccessWithUpdatePensErrorSwal;

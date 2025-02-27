import { useCallback } from "react";
import useFireSwal from "../../../../hooks/use-fire-swal";
import { updatePenRollbackErrorEmailSentMessage } from "../../../../strings/info";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { bookingsRoute } from "../../../../strings/routes";

const useSendEmailSentWithUpdatePensErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailSentWithUpdatePensErrorSwal = useCallback(() => {
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
        hamburgerHandlerNavigate(bookingsRoute);
      }
    });
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { sendEmailSentWithUpdatePensErrorSwal };
};

export default useSendEmailSentWithUpdatePensErrorSwal;

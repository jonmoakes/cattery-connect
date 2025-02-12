import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../../hooks/selectors/use-get-send-email-selectors";
import useFireSwal from "../../../../hooks/use-fire-swal";

import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";
import { accountRoute } from "../../../../strings/routes";

const useSendEmailUpdatePensRollbackErrorResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202) {
      fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else if (sendEmailError) {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please contact jonathan urgently The error received was ${sendEmailError}`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(accountRoute);
        }
      });
    }
  }, [sendEmailStatusCode, sendEmailError, hamburgerHandlerNavigate, fireSwal]);
};

export default useSendEmailUpdatePensRollbackErrorResultSwalUseEffect;

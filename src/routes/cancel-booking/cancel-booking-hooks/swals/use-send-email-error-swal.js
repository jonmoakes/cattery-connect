import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { contactRoute } from "../../../../strings/routes";

const useSendEmailErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailErrorSwal = useCallback(
    (sendEmailError) => {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please contact jonathan. The error received was: 

${sendEmailError}`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(contactRoute);
        }
      });
    },
    [fireSwal, hamburgerHandlerNavigate]
  );

  return { sendEmailErrorSwal };
};

export default useSendEmailErrorSwal;

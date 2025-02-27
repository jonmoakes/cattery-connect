import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { pensUpdatedUploadBookingDataFailedEmailSentMessage } from "../../../../strings/info";
import { accountRoute } from "../../../../strings/routes";

const useSendEmailSuccessWithUploadBookingDataErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailSuccessWithUploadBookingDataErrorSwal = useCallback(() => {
    fireSwal(
      "success",
      pensUpdatedUploadBookingDataFailedEmailSentMessage,
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

  return { sendEmailSuccessWithUploadBookingDataErrorSwal };
};

export default useSendEmailSuccessWithUploadBookingDataErrorSwal;

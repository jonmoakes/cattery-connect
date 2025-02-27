import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { pensUpdatedDeleteBookingDataFailedEmailSentMessage } from "../../../../strings/info";
import { bookingsRoute } from "../../../../strings/routes";

const useSendEmailSentWithDeleteBookingDataErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const sendEmailSentWithDeleteBookingDataErrorSwal = useCallback(() => {
    fireSwal(
      "success",
      pensUpdatedDeleteBookingDataFailedEmailSentMessage,
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

  return { sendEmailSentWithDeleteBookingDataErrorSwal };
};

export default useSendEmailSentWithDeleteBookingDataErrorSwal;

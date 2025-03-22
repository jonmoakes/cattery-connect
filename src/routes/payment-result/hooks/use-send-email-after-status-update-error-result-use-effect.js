import { useEffect } from "react";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { signedInCustomersBookingsRoute } from "../../../strings/routes";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import { useDispatch } from "react-redux";
import { emailFailedToSendMessage } from "../../../strings/errors";
import { emailSentAfterPaymentStatusUpdateMessage } from "../../../strings/info";

const useSendEmailAfterStatusUpdateErrorResultUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202) {
      fireSwal(
        "success",
        emailSentAfterPaymentStatusUpdateMessage,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
          hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
        }
      });
    } else if (sendEmailError) {
      fireSwal(
        "error",
        emailFailedToSendMessage,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
          hamburgerHandlerNavigate(signedInCustomersBookingsRoute);
        }
      });
    }
  }, [
    fireSwal,
    hamburgerHandlerNavigate,
    sendEmailError,
    sendEmailStatusCode,
    dispatch,
  ]);
};

export default useSendEmailAfterStatusUpdateErrorResultUseEffect;

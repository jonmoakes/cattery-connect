import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import { contactFormErrorMessage } from "../../../strings/errors";
import { emailResponseTimeMessage } from "../../../strings/info";

const useSendContactFormMessageResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;
    if (sendEmailStatusCode === 202) {
      fireSwal(
        "success",
        emailResponseTimeMessage,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
        }
      });
    } else if (sendEmailError) {
      fireSwal(
        "error",
        contactFormErrorMessage(sendEmailError),
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
        }
      });
    }
  }, [sendEmailStatusCode, sendEmailError, fireSwal, dispatch]);
};

export default useSendContactFormMessageResultSwal;

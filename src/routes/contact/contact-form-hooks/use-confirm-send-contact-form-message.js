import { useDispatch } from "react-redux";

import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { sendEmailContactFormMessageAsync } from "../../../store/send-email/send-email.thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useConfirmSendContactFormMessage = () => {
  const { senderName, senderEmail, senderMessage, catteryEmail } =
    useGetSendEmailSelectors();

  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmSendContactFormMessage = (e) => {
    e.preventDefault();
    confirmSwal(
      "send this message?",
      "",
      "send email",
      "",
      () =>
        dispatch(
          sendEmailContactFormMessageAsync({
            catteryEmail,
            senderName,
            senderEmail,
            senderMessage,
          })
        ),
      null
    );
  };

  return { confirmSendContactFormMessage };
};

export default useConfirmSendContactFormMessage;

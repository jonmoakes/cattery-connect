import { useSelector } from "react-redux";
import { selectSendEmailSelectors } from "../../store/send-email/send-email.slice";

const useGetSendEmailSelectors = () => {
  const {
    sendEmailIsLoading,
    sendEmailStatusCode,
    sendEmailError,
    contactFormDetails,
  } = useSelector(selectSendEmailSelectors);

  const { senderName, senderEmail, senderMessage } = contactFormDetails ?? {};

  return {
    sendEmailIsLoading,
    sendEmailStatusCode,
    sendEmailError,
    contactFormDetails,
    senderName,
    senderEmail,
    senderMessage,
  };
};

export default useGetSendEmailSelectors;

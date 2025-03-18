import { useSelector } from "react-redux";
import { selectSendEmailSelectors } from "../../store/send-email/selectors";

const useGetSendEmailSelectors = () => {
  const {
    sendEmailIsLoading,
    sendEmailStatusCode,
    sendEmailError,
    contactFormDetails,
    getCatteryEmailIsLoading,
    catteryEmail,
    getCatteryEmailResult,
    getCatteryEmailError,
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
    getCatteryEmailIsLoading,
    catteryEmail,
    getCatteryEmailResult,
    getCatteryEmailError,
  };
};

export default useGetSendEmailSelectors;

import { useSelector } from "react-redux";
import { selectSendEmailSelectors } from "../../store/send-email/send-email.slice";

const useGetSendEmailSelectors = () => {
  const { sendEmailIsLoading, sendEmailStatusCode, sendEmailError } =
    useSelector(selectSendEmailSelectors);

  return { sendEmailIsLoading, sendEmailStatusCode, sendEmailError };
};

export default useGetSendEmailSelectors;

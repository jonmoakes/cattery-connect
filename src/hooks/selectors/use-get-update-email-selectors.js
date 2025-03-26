import { useSelector } from "react-redux";
import { selectUpdateEmailSelectors } from "../../store/update-email/selectors";

const useGetUpdateEmailSelectors = () => {
  const {
    updateEmailIsLoading,
    updateEmailDetails,
    updateEmailResult,
    updateEmailError,
  } = useSelector(selectUpdateEmailSelectors);

  const { newEmail, confirmNewEmail, password } = updateEmailDetails ?? {};

  return {
    updateEmailIsLoading,
    updateEmailDetails,
    updateEmailResult,
    updateEmailError,
    newEmail,
    confirmNewEmail,
    password,
  };
};

export default useGetUpdateEmailSelectors;

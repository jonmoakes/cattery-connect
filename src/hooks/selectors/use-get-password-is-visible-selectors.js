import { useSelector } from "react-redux";

import { selectPasswordIsVisibleSelectors } from "../../store/password-is-visible/password-is-visible.slice";

const useGetPasswordIsVisibleSelectors = () => {
  const {
    signInPasswordIsVisible,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible,
  } = useSelector(selectPasswordIsVisibleSelectors);

  return {
    signInPasswordIsVisible,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible,
  };
};

export default useGetPasswordIsVisibleSelectors;

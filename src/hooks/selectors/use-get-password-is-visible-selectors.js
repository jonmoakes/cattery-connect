import { useSelector } from "react-redux";

import { selectPasswordIsVisibleSelectors } from "../../store/password-is-visible/selectors";

const useGetPasswordIsVisibleSelectors = () => {
  const {
    signInPasswordIsVisible,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible,
  } = useSelector(selectPasswordIsVisibleSelectors);

  return {
    signInPasswordIsVisible,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    updateEmailPasswordIsVisible,
  };
};

export default useGetPasswordIsVisibleSelectors;

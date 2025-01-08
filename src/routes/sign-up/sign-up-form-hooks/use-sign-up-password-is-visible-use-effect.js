import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../../hooks/selectors/use-get-password-is-visible-selectors";
import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";
import {
  hideSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";

const useSignUpPasswordIsVisibleUseEffect = () => {
  const { signUpPasswordIsVisible, signUpConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const { password, confirmPassword } = useGetSignUpFormSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpPasswordIsVisible && !password.length) {
      dispatch(hideSignUpPasswordIsVisible());
    } else if (signUpConfirmPasswordIsVisible && !confirmPassword.length) {
      dispatch(hideSignUpConfirmPasswordIsVisible());
    }
  }, [
    password,
    confirmPassword,
    signUpPasswordIsVisible,
    signUpConfirmPasswordIsVisible,
    dispatch,
  ]);
};

export default useSignUpPasswordIsVisibleUseEffect;

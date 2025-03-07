import { useEffect } from "react";

import useChooseNewPasswordLogic from "./use-choose-new-password-logic";
import { useDispatch } from "react-redux";
import {
  hideResetPasswordConfirmPasswordIsVisible,
  hideResetPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";

const useHideResetPasswordFieldsOnEmpty = () => {
  const {
    newPassword,
    confirmNewPassword,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
  } = useChooseNewPasswordLogic();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetPasswordIsVisible && newPassword && !newPassword.length) {
      dispatch(hideResetPasswordIsVisible());
    } else if (
      resetPasswordConfirmPasswordIsVisible &&
      confirmNewPassword &&
      !confirmNewPassword.length
    ) {
      dispatch(hideResetPasswordConfirmPasswordIsVisible());
    }
  }, [
    confirmNewPassword,
    newPassword,
    resetPasswordConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
    dispatch,
  ]);
};

export default useHideResetPasswordFieldsOnEmpty;

import { useDispatch } from "react-redux";

import useChooseNewPasswordLogic from "./use-choose-new-password-logic";
import { getChooseNewPasswordResultAsync } from "../../../store/choose-new-password/choose-new-password.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  passwordLengthErrorMessage,
  passwordsDontMatchMessage,
} from "../../../strings/errors";
import {
  sureResetPasswordMessage,
  imSureMessage,
} from "../../../strings/confirms";

const useConfirmUpdatePassword = () => {
  const { newPassword, confirmNewPassword } = useChooseNewPasswordLogic();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const confirmUpdatePassword = (e) => {
    e.preventDefault();
    if (
      (newPassword && newPassword.length < 8) ||
      (confirmNewPassword && confirmNewPassword.length < 8)
    ) {
      fireSwal(
        "error",
        passwordLengthErrorMessage,
        "",
        0,
        "",
        false,
        "",
        false
      );
    } else if (
      newPassword &&
      confirmNewPassword &&
      newPassword !== confirmNewPassword
    ) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, "", false, "", false);
    } else {
      confirmSwal(
        sureResetPasswordMessage,
        "",
        imSureMessage,
        "",
        () =>
          dispatch(
            getChooseNewPasswordResultAsync({ newPassword, confirmNewPassword })
          ),
        null
      );
    }
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;

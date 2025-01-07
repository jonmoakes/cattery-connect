import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useSignUpThunk from "./use-sign-up-form-functions";

import {
  passwordCantContainSpaceMessage,
  passwordsDontMatchMessage,
} from "../../../strings/errors";
import { confirmSignUpMessage, imSureMessage } from "../../../strings/confirms";

const useHandleSignUpFormSubmit = () => {
  const { password, confirmPassword } = useGetSignUpFormSelectors();
  const { signUpThunk } = useSignUpThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const confirmResult = () => {
    signUpThunk();
  };

  const confirmSignUp = () => {
    confirmSwal(confirmSignUpMessage, "", imSureMessage, "cancel sign up", () =>
      confirmResult()
    );
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, "", false, "", false);
    } else if (password.includes(" ")) {
      fireSwal(
        "error",
        passwordCantContainSpaceMessage,
        "",
        0,
        "",
        false,
        "",
        false
      );
    } else {
      confirmSignUp();
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;

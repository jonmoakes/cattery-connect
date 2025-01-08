import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";
import { signUpAsync } from "../../../store/user/user.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import {
  enterPhoneNumberMessage,
  passwordCantContainSpaceMessage,
  passwordsDontMatchMessage,
  phoneLengthErrorMessage,
} from "../../../strings/errors";
import { confirmSignUpMessage, imSureMessage } from "../../../strings/confirms";

const useHandleSignUpFormSubmit = () => {
  const { email, password, name, phoneNumber, confirmPassword } =
    useGetSignUpFormSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber) {
      fireSwal("error", enterPhoneNumberMessage, "", 0, "", false, "", false);
    } else if (phoneNumber && phoneNumber.length !== 11) {
      fireSwal("error", phoneLengthErrorMessage, "", 0, "", false, "", false);
    } else if (password !== confirmPassword) {
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
      confirmSwal(
        confirmSignUpMessage,
        "",
        imSureMessage,
        "cancel sign up",
        () => dispatch(signUpAsync({ email, name, password, phoneNumber }))
      );
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;

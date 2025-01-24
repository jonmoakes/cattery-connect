import { useDispatch } from "react-redux";
import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import { passwordCantContainSpaceMessage } from "../../../strings/errors";
import { signInAsync } from "../../../store/user/user.thunks";
import { isValidEmail } from "../../../functions/is-valid-email";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

const useSignInFormSubmit = () => {
  const { email, password } = useGetSignInFormSelectors();
  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const signInFormSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      showInvalidEmailMessageSwal();
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
      dispatch(signInAsync({ email, password }));
    }
  };

  return { signInFormSubmit };
};
export default useSignInFormSubmit;

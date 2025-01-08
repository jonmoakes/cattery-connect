import { useDispatch } from "react-redux";
import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import { passwordCantContainSpaceMessage } from "../../../strings/errors";
import { signInAsync } from "../../../store/user/user.thunks";

const useSignInFormSubmit = () => {
  const { email, password } = useGetSignInFormSelectors();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const signInFormSubmit = (e) => {
    e.preventDefault();

    if (password.includes(" ")) {
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

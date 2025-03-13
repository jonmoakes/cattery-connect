import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";
import { signUpAsync } from "../../../store/user/user.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import { passwordCantContainSpaceMessage } from "../../../strings/errors";

const useSignUpFormSubmit = () => {
  const { customerId, password, confirmPassword } = useGetSignUpFormSelectors();

  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const signUpFormSubmit = (e) => {
    e.preventDefault();

    if (customerId.length !== 7) {
      fireSwal(
        "error",
        "customer id should be 7 characters long.",
        "",
        0,
        "",
        false,
        "",
        false
      );
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
    } else if (password !== confirmPassword) {
      fireSwal("error", "passwords don't match", "", 0, "", false, "", false);
    } else {
      dispatch(signUpAsync({ customerId, password }));
    }
  };

  return { signUpFormSubmit };
};
export default useSignUpFormSubmit;

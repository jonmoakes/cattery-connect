import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetPasswordIsVisibleSelectors from "../../../hooks/selectors/use-get-password-is-visible-selectors";
import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import { hideSignInPasswordIsVisible } from "../../../store/password-is-visible/password-is-visible.slice";

const useSignInPasswordIsVisibleUseEffect = () => {
  const { signInPasswordIsVisible } = useGetPasswordIsVisibleSelectors();
  const { password } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (signInPasswordIsVisible && !password.length) {
      dispatch(hideSignInPasswordIsVisible());
    }
  }, [dispatch, password, signInPasswordIsVisible]);
};

export default useSignInPasswordIsVisibleUseEffect;

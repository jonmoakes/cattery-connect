import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";

import { signInRoute, signUpRoute } from "../strings/routes";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(resetSignInFormState());
        break;
      case signUpRoute:
        dispatch(resetSignUpFormState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;

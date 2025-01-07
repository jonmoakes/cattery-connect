import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";

import { signUpRoute } from "../strings/routes";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
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

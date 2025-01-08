import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../../../store/sign-up-form/sign-up-form.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  const resetAllStoreOnSignOut = () => {
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;

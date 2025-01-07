import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";
import { setSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.slice";
import {
  hideSignUpConfirmPasswordIsVisible,
  hideSignUpPasswordIsVisible,
  toggleSignUpConfirmPasswordIsVisible,
  toggleSignUpPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { signUpAsync } from "../../../store/user/user.thunks";

const useSignUpFormFunctions = () => {
  const { signUpFormDetails, password, phoneNumber } =
    useGetSignUpFormSelectors();
  let { name, email } = useGetSignUpFormSelectors();
  const dispatch = useDispatch();

  const resetSignUpError = () => {
    dispatch(resetCurrentUserErrorMessage());
  };

  const dispatchHandleSignUpFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignUpFormDetails({ ...signUpFormDetails, [name]: value }));
  };

  const dispatchToggleSignUpPasswordIsVisible = () => {
    dispatch(toggleSignUpPasswordIsVisible());
  };

  const dispatchToggleSignUpConfirmPasswordIsVisible = () => {
    dispatch(toggleSignUpConfirmPasswordIsVisible());
  };

  const dispatchHideSignUpPasswordIsVisible = () => {
    dispatch(hideSignUpPasswordIsVisible());
  };

  const dispatchHideSignUpConfirmPasswordIsVisible = () => {
    dispatch(hideSignUpConfirmPasswordIsVisible());
  };

  const signUpThunk = () => {
    name = name.toLowerCase();
    email = email.toLowerCase();
    dispatch(signUpAsync({ email, password, name, phoneNumber }));
  };

  return {
    resetSignUpError,
    dispatchHandleSignUpFormChange,
    dispatchToggleSignUpPasswordIsVisible,
    dispatchToggleSignUpConfirmPasswordIsVisible,
    dispatchHideSignUpPasswordIsVisible,
    dispatchHideSignUpConfirmPasswordIsVisible,
    signUpThunk,
  };
};

export default useSignUpFormFunctions;

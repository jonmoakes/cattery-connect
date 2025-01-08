import useGetSignInFormSelectors from "../selectors/use-get-sign-in-form-selectors";
import useGetSignUpFormSelectors from "../selectors/use-get-sign-up-form-selectors";

const useFormValuesCheck = () => {
  const { email, password } = useGetSignInFormSelectors();
  const {
    name,
    email: signUpEmail,
    password: signUpPassword,
    phoneNumber,
    confirmPassword,
  } = useGetSignUpFormSelectors();

  const hasSignInValues = email || password;
  const hasSignUpValues =
    name || signUpEmail || signUpPassword || phoneNumber || confirmPassword;

  return { hasSignInValues, hasSignUpValues };
};

export default useFormValuesCheck;

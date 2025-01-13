import useGetSignInFormSelectors from "../selectors/use-get-sign-in-form-selectors";

const useFormValuesCheck = () => {
  const { email, password } = useGetSignInFormSelectors();

  const hasSignInValues = email || password;

  return { hasSignInValues };
};

export default useFormValuesCheck;

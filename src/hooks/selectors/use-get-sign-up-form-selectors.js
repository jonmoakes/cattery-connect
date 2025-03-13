import { useSelector } from "react-redux";

import { selectSignUpFormSelectors } from "../../store/sign-up-form/selectors";

const useGetSignUpFormSelectors = () => {
  const { signUpFormDetails } = useSelector(selectSignUpFormSelectors);

  const { customerId, password, confirmPassword } = signUpFormDetails ?? {};

  return {
    signUpFormDetails,
    customerId,
    password,
    confirmPassword,
  };
};

export default useGetSignUpFormSelectors;

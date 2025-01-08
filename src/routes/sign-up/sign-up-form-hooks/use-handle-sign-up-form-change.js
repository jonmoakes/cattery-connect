import { useDispatch } from "react-redux";

import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";
import { setSignUpFormDetails } from "../../../store/sign-up-form/sign-up-form.slice";

const useHandleSignUpFormChange = () => {
  const { signUpFormDetails } = useGetSignUpFormSelectors();
  const dispatch = useDispatch();

  const handleSignUpFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignUpFormDetails({ ...signUpFormDetails, [name]: value }));
  };

  return { handleSignUpFormChange };
};

export default useHandleSignUpFormChange;

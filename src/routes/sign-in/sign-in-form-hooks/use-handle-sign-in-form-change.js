import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";

import { setSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";

const useHandleSignInFormChange = () => {
  const { signInFormDetails } = useGetSignInFormSelectors();
  const dispatch = useDispatch();

  const handleSignInFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  return { handleSignInFormChange };
};

export default useHandleSignInFormChange;

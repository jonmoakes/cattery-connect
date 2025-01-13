import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";

const useCheckForAndClearFormDetails = () => {
  const { signInFormDetails } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  const checkFormDetails = useCallback(
    (formDetails, resetAction) => {
      if (Object.values(formDetails).every((value) => value !== "")) {
        dispatch(resetAction());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    checkFormDetails(signInFormDetails, resetSignInFormState);
  }, [checkFormDetails, signInFormDetails]);
};

export default useCheckForAndClearFormDetails;

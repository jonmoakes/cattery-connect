import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwriteNoUserError,
  appwriteCredentialsError,
  passwordLengthErrorMessage,
  appwritePasswordLengthError,
  errorReceivedMessage,
} from "../../../strings/errors";

const useHandleSignInFormErrorUseEffect = () => {
  const { currentUserError } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError &&
        (currentUserError === appwriteNoUserError ||
          currentUserError === "Failed to fetch"))
    )
      return;

    const errorDetails =
      currentUserError === appwriteCredentialsError
        ? appwriteCredentialsError
        : currentUserError === appwritePasswordLengthError
        ? passwordLengthErrorMessage
        : currentUserError;

    fireSwal(
      "error",
      errorReceivedMessage(
        "sorry, there was an error trying to sign you in.",
        errorDetails
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCurrentUserErrorMessage());
      }
    });
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignInFormErrorUseEffect;

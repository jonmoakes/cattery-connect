import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useSignUpFormFunctions from "./use-sign-up-form-functions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwriteNoUserError,
  errorReceivedMessage,
} from "../../../strings/errors";

const useHandleSignUpFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { resetSignUpError } = useSignUpFormFunctions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (
      !currentUserError ||
      currentUserError === appwriteNoUserError ||
      currentUserError === "Failed to fetch"
    )
      return;

    fireSwal(
      "error",
      errorReceivedMessage(
        "sorry, there was an error creating your account.",
        currentUserError
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetSignUpError();
      }
    });
  }, [fireSwal, currentUserError, resetSignUpError]);
};

export default useHandleSignUpFormError;

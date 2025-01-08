import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwriteNoUserError,
  errorReceivedMessage,
} from "../../../strings/errors";

const useHandleSignUpFormErrorUseEffect = () => {
  const { currentUserError } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

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
        dispatch(resetCurrentUserErrorMessage());
      }
    });
  }, [fireSwal, currentUserError, dispatch]);
};

export default useHandleSignUpFormErrorUseEffect;

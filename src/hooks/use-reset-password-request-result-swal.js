import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetGenerateNewPasswordRequestSelectors from "./selectors/use-get-generate-new-password-request-selectors";
import useFireSwal from "./use-fire-swal";
import { resetGenerateNewPasswordRequestState } from "../store/generate-new-password-request/generate-new-password-request.slice";

import {
  errorReceivedMessage,
  emailAddressNotInDatabase,
  appwriteUserNotFoundMessage,
} from "../strings/errors";

const useResetPasswordRequestResultSwal = () => {
  const { generateNewPasswordRequestResult, generateNewPasswordRequestError } =
    useGetGenerateNewPasswordRequestSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!generateNewPasswordRequestResult && !generateNewPasswordRequestError)
      return;

    if (generateNewPasswordRequestResult) {
      fireSwal(
        "success",
        "success!",
        "please check your email",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetGenerateNewPasswordRequestState());
        }
      });
    } else if (generateNewPasswordRequestError) {
      const errorDetails =
        generateNewPasswordRequestError === appwriteUserNotFoundMessage
          ? emailAddressNotInDatabase
          : generateNewPasswordRequestError;
      fireSwal(
        "error",
        errorReceivedMessage(
          "sorry, there was an error trying to send the reset password link.",
          errorDetails
        ),
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetGenerateNewPasswordRequestState());
        }
      });
    }
  }, [
    dispatch,
    generateNewPasswordRequestError,
    fireSwal,
    generateNewPasswordRequestResult,
  ]);
};

export default useResetPasswordRequestResultSwal;

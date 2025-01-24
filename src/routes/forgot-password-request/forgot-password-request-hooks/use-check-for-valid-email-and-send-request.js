import { useDispatch } from "react-redux";

import useGetGenerateNewPasswordRequestSelectors from "../../../hooks/selectors/use-get-generate-new-password-request-selectors";
import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { isValidEmail } from "../../../functions/is-valid-email";
import { confirmSendPasswordResetRequestMessage } from "../../../strings/confirms";

const useCheckForValidEmailAndSendRequest = () => {
  const { generateNewPasswordRequestEmail } =
    useGetGenerateNewPasswordRequestSelectors();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const checkForValidEmailAndSendRequest = (e) => {
    e.preventDefault();

    if (!isValidEmail(generateNewPasswordRequestEmail)) {
      showInvalidEmailMessageSwal();
    } else {
      confirmSwal(
        confirmSendPasswordResetRequestMessage(generateNewPasswordRequestEmail),
        "",
        "yes, send it!",
        "",
        () =>
          dispatch(
            generateNewPasswordRequestAsync({ generateNewPasswordRequestEmail })
          ),
        null
      );
    }
  };

  return { checkForValidEmailAndSendRequest };
};

export default useCheckForValidEmailAndSendRequest;

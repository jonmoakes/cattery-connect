import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../../hooks/selectors/use-get-update-email-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { isValidEmail } from "../../../functions/is-valid-email";
import { confirmUpdateEmailMessage } from "../../../strings/confirms";

const useConfirmUpdateEmail = () => {
  const { id, email } = useGetCurrentUserSelectors();
  const { newEmail, confirmNewEmail, password } = useGetUpdateEmailSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      updateEmailAsync({
        id,
        newEmail,
        password,
      })
    );
  };

  const confirmUpdateEmail = () => {
    if (!isValidEmail(newEmail)) {
      showInvalidEmailMessageSwal();
    } else if (newEmail === email) {
      fireSwal(
        "error",
        `your new email is the same as your old one.

please choose another email address`,
        0,
        "",
        false,
        "",
        true
      );
    } else if (newEmail !== confirmNewEmail) {
      fireSwal(
        "error",
        `your email addresses don't match

please double check the new email and confirm new email input fields.`,
        "",
        0,
        "",
        false,
        "",
        true
      );
    } else {
      confirmSwal(
        confirmUpdateEmailMessage(newEmail),
        "",
        "i'm sure",
        "",
        confirmResult,
        null
      );
    }
  };

  return { confirmUpdateEmail };
};

export default useConfirmUpdateEmail;

import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useConfirmUpdatePassword = () => {
  const { email } = useGetCurrentUserSelectors();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      generateNewPasswordRequestAsync({
        generateNewPasswordRequestEmail: email,
      })
    );
  };

  const confirmUpdatePassword = () => {
    confirmSwal(
      "are you sure you wish to reset your password",
      "",
      "i'm sure",
      "",
      confirmResult,
      null
    );
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;

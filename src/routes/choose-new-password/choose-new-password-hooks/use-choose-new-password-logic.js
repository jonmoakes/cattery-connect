import { useDispatch } from "react-redux";

import useGetChooseNewPasswordSelectors from "../../../hooks/selectors/use-get-choose-new-password-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/selectors/use-get-password-is-visible-selectors";
import { setNewPasswordDetails } from "../../../store/choose-new-password/choose-new-password.slice";

const useChooseNewPasswordLogic = () => {
  const {
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
    newPassword,
    confirmNewPassword,
    newPasswordDetails,
  } = useGetChooseNewPasswordSelectors();

  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const dispatch = useDispatch();

  const handleChooseNewPasswordChange = (event) => {
    const { value, name } = event.target;
    dispatch(setNewPasswordDetails({ ...newPasswordDetails, [name]: value }));
  };

  return {
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
    newPassword,
    confirmNewPassword,
    newPasswordDetails,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    handleChooseNewPasswordChange,
  };
};

export default useChooseNewPasswordLogic;

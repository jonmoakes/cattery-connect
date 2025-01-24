import { useSelector } from "react-redux";
import { selectChooseNewPasswordSelectors } from "../../store/choose-new-password/choose-new-password.slice";

const useGetChooseNewPasswordSelectors = () => {
  const {
    newPasswordDetails,
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
  } = useSelector(selectChooseNewPasswordSelectors);

  const { newPassword, confirmNewPassword } = newPasswordDetails;

  return {
    newPasswordDetails,
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
    newPassword,
    confirmNewPassword,
  };
};

export default useGetChooseNewPasswordSelectors;

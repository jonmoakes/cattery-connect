import { useSelector } from "react-redux";

import { selectGenerateNewPasswordRequestSelectors } from "../../store/generate-new-password-request/generate-new-password-request.slice";

const useGetGenerateNewPasswordRequestSelectors = () => {
  const {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
    generateNewPasswordRequestResult,
    generateNewPasswordRequestError,
  } = useSelector(selectGenerateNewPasswordRequestSelectors);

  return {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
    generateNewPasswordRequestResult,
    generateNewPasswordRequestError,
  };
};

export default useGetGenerateNewPasswordRequestSelectors;

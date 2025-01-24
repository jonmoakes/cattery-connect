import { useDispatch } from "react-redux";
import { setGenerateNewPasswordRequestEmail } from "../../../store/generate-new-password-request/generate-new-password-request.slice";

const useForgotPasswordRequestFunctions = () => {
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setGenerateNewPasswordRequestEmail(event.target.value));
  };

  return { handleEmailChange };
};

export default useForgotPasswordRequestFunctions;

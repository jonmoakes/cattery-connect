import { useNavigate } from "react-router-dom";

import useConfirmSwal from "../../hooks/use-confirm-swal";

import { imSureMessage } from "../../strings/confirms";
import { loseAllDataMessage } from "../../strings/info";

const useConfirmGoBack = () => {
  const { confirmSwal } = useConfirmSwal();

  const navigate = useNavigate();

  const confirmGoBack = () => {
    const confirmResult = () => {
      navigate(-1);
    };
    confirmSwal(
      "are you sure?",
      loseAllDataMessage,
      imSureMessage,
      "stay here",
      confirmResult,
      null
    );
  };

  return { confirmGoBack };
};

export default useConfirmGoBack;

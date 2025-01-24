import useFireSwal from "./use-fire-swal";

import { invalidEmailErrorMessage } from "../strings/errors";
const useShowInvalidEmailMessageSwal = () => {
  const { fireSwal } = useFireSwal();

  const showInvalidEmailMessageSwal = () => {
    fireSwal("error", invalidEmailErrorMessage, "", 0, "", false, "", false);
  };

  return { showInvalidEmailMessageSwal };
};

export default useShowInvalidEmailMessageSwal;

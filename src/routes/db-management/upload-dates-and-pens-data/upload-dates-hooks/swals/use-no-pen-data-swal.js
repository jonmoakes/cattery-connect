import { useCallback } from "react";

import useFireSwal from "../../../../../hooks/use-fire-swal";

const useNoPenDataSwal = () => {
  const { fireSwal } = useFireSwal();

  const noPenDataSwal = useCallback(() => {
    fireSwal(
      "error",
      "you have added no pen data.",
      "",
      0,
      "",
      false,
      "",
      false
    );
  }, [fireSwal]);

  return { noPenDataSwal };
};

export default useNoPenDataSwal;

import { useCallback } from "react";

import useFireSwal from "../../../../../hooks/use-fire-swal";

const useMissingStartAndEndDatesSwal = () => {
  const { fireSwal } = useFireSwal();

  const missingStartAndEndDatesSwal = useCallback(() => {
    fireSwal(
      "error",
      "missing start and end dates",
      "",
      0,
      "",
      false,
      "",
      false
    );
  }, [fireSwal]);

  return { missingStartAndEndDatesSwal };
};

export default useMissingStartAndEndDatesSwal;

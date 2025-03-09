import { useCallback } from "react";
import useFireSwal from "../../../hooks/use-fire-swal";

const usePastDateDataNotAvailableSwal = () => {
  const { fireSwal } = useFireSwal();

  const pastDateDataNotAvailableSwal = useCallback(() => {
    fireSwal(
      "info",
      "sorry, data is not available for past dates.",
      "",
      0,
      "",
      false,
      "",
      false
    );
  }, [fireSwal]);

  return { pastDateDataNotAvailableSwal };
};

export default usePastDateDataNotAvailableSwal;

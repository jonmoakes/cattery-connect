import { useCallback } from "react";

import useFireSwal from "../../../../../hooks/use-fire-swal";
import useGetUploadDatesAndPensDataSelectors from "../../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

const useMissingStartOrEndDateSwal = () => {
  const { startDate, endDate } = useGetUploadDatesAndPensDataSelectors();
  const { fireSwal } = useFireSwal();

  const missingStartOrEndDateSwal = useCallback(() => {
    fireSwal(
      "error",
      !startDate ? "missing start date" : !endDate && "missing end date",
      "",
      0,
      "",
      false,
      "",
      false
    );
  }, [fireSwal, startDate, endDate]);

  return { missingStartOrEndDateSwal };
};

export default useMissingStartOrEndDateSwal;

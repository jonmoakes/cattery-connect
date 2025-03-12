import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDailyScheduleSelectors from "../../../../hooks/selectors/use-get-daily-schedule-selectors";
import useUpdateCheckInOutStatusErrorSwal from "./swals/update-check-in-out-status-error-swal";
import useUpdateCheckInOutStatusSuccessSwal from "./swals/update-check-in-out-status-success-swal";

const useUpdateCheckInOutStatusResultSwalUseEffect = () => {
  const { updateCheckInOutStatusResult, updateCheckInOutStatusError } =
    useGetDailyScheduleSelectors();
  const { updateCheckInOutStatusSuccessSwal } =
    useUpdateCheckInOutStatusSuccessSwal();
  const { updateCheckInOutStatusErrorSwal } =
    useUpdateCheckInOutStatusErrorSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateCheckInOutStatusResult && !updateCheckInOutStatusError) return;

    if (updateCheckInOutStatusResult === "fulfilled") {
      updateCheckInOutStatusSuccessSwal();
    } else if (updateCheckInOutStatusResult === "rejected") {
      updateCheckInOutStatusErrorSwal(updateCheckInOutStatusError);
    }
  }, [
    dispatch,
    updateCheckInOutStatusResult,
    updateCheckInOutStatusError,
    updateCheckInOutStatusSuccessSwal,
    updateCheckInOutStatusErrorSwal,
  ]);
};
export default useUpdateCheckInOutStatusResultSwalUseEffect;

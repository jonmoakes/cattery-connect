import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCurentUserSelectors from "../../../../../hooks/selectors/use-get-current-user-selectors";
import { resetUpdateCheckInOutStatusResult } from "../../../../../store/daily-schedule/daily-schedule.slice";
import { getDailyBookingsDataAsync } from "../../../../../store/daily-schedule/daily-schedule.thunks";

import useFireSwal from "../../../../../hooks/use-fire-swal";

const useUpdateCheckInOutStatusSuccessSwal = () => {
  const { catteryId } = useGetCurentUserSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const updateCheckInOutStatusSuccessSwal = useCallback(() => {
    fireSwal("success", "done!", "", 2000, "", false, "", false);
    dispatch(resetUpdateCheckInOutStatusResult());
    dispatch(getDailyBookingsDataAsync({ catteryId, chosenDate: "" }));
  }, [fireSwal, dispatch, catteryId]);

  return { updateCheckInOutStatusSuccessSwal };
};

export default useUpdateCheckInOutStatusSuccessSwal;

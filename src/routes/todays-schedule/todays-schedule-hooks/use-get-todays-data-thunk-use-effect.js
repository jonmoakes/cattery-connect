import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetTodaysScheduleSelectors from "../../../hooks/selectors/use-get-todays-schedule-selectors";
import { getTodaysBookingsDataAsync } from "../../../store/todays-schedule/todays-schedule.thunks";

const useGetTodaysDataThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const { todaysBookingsDataResult } = useGetTodaysScheduleSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser || todaysBookingsDataResult) return;

    dispatch(getTodaysBookingsDataAsync({ catteryId }));
  }, [currentUser, catteryId, todaysBookingsDataResult, dispatch]);
};

export default useGetTodaysDataThunkUseEffect;

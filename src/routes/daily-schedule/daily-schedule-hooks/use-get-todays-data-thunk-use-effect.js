import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetDailyScheduleSelectors from "../../../hooks/selectors/use-get-daily-schedule-selectors";
import { getDailyBookingsDataAsync } from "../../../store/daily-schedule/daily-schedule.thunks";

const useGetTodaysDataThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const { dailyBookingsDataResult } = useGetDailyScheduleSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || dailyBookingsDataResult) return;

    dispatch(getDailyBookingsDataAsync({ catteryId, chosenDate: "" }));
  }, [currentUser, catteryId, dailyBookingsDataResult, dispatch]);
};

export default useGetTodaysDataThunkUseEffect;

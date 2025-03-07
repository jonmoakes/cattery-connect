import { useSelector } from "react-redux";

import { selectDailyScheduleSelectors } from "../../store/daily-schedule/selectors";

const useGetDailyScheduleSelectors = () => {
  const {
    dailyScheduleIsLoading,
    dailyBookingsData,
    dailyBookingsDataResult,
    dailyBookingsDataError,
  } = useSelector(selectDailyScheduleSelectors);

  const { chosenDaysData, dateForShownData } = dailyBookingsData ?? {};

  return {
    dailyScheduleIsLoading,
    dailyBookingsData,
    chosenDaysData,
    dateForShownData,
    dailyBookingsDataResult,
    dailyBookingsDataError,
  };
};

export default useGetDailyScheduleSelectors;

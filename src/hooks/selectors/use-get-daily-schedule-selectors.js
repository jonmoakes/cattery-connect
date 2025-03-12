import { useSelector } from "react-redux";

import { selectDailyScheduleSelectors } from "../../store/daily-schedule/selectors";

const useGetDailyScheduleSelectors = () => {
  const {
    dailyScheduleIsLoading,
    dailyBookingsData,
    dailyBookingsDataResult,
    dailyBookingsDataError,
    updateCheckInOutStatusIsLoading,
    updateCheckInOutStatusResult,
    updateCheckInOutStatusError,
  } = useSelector(selectDailyScheduleSelectors);

  const { chosenDaysData, dateForShownData, passedChosenDate } =
    dailyBookingsData ?? {};

  return {
    dailyScheduleIsLoading,
    dailyBookingsData,
    chosenDaysData,
    dateForShownData,
    dailyBookingsDataResult,
    dailyBookingsDataError,
    updateCheckInOutStatusIsLoading,
    updateCheckInOutStatusResult,
    updateCheckInOutStatusError,
    passedChosenDate,
  };
};

export default useGetDailyScheduleSelectors;

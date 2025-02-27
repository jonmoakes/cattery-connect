import { useSelector } from "react-redux";

import { selectTodaysScheduleSelectors } from "../../store/todays-schedule/todays-schedule.slice";

const useGetTodaysScheduleSelectors = () => {
  const {
    todaysScheduleIsLoading,
    todaysBookingsData,
    todaysBookingsDataResult,
    todaysBookingsDataError,
  } = useSelector(selectTodaysScheduleSelectors);

  return {
    todaysScheduleIsLoading,
    todaysBookingsData,
    todaysBookingsDataResult,
    todaysBookingsDataError,
  };
};

export default useGetTodaysScheduleSelectors;

import { useSelector } from "react-redux";

import { selectTodaysScheduleSelectors } from "../../store/todays-schedule/todays-schedule.slice";

const useGetTodaysScheduleSelectors = () => {
  const { todaysScheduleIsLoading, todaysScheduleData, todaysScheduleError } =
    useSelector(selectTodaysScheduleSelectors);

  const atLeastOneBookingOnTodaysDate =
    todaysScheduleData && todaysScheduleData.length > 0;

  return {
    todaysScheduleIsLoading,
    todaysScheduleData,
    todaysScheduleError,
    atLeastOneBookingOnTodaysDate,
  };
};

export default useGetTodaysScheduleSelectors;

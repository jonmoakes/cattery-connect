import { useMemo } from "react";

import useGetDailyScheduleSelectors from "../../../hooks/selectors/use-get-daily-schedule-selectors";

import { defaultTableSize } from "../../../constants/constants";
import TODAYS_SCHEDULE_TABLE_COLUMNS from "../daily-schedule-table-columns";

const useDailyScheduleTableVariables = () => {
  const { dailyBookingsDataResult, chosenDaysData, passedChosenDate } =
    useGetDailyScheduleSelectors();

  const dailySchedulePageSizeFromLocalStorage = localStorage.getItem(
    "dailyScheduleChosenTablePageSize"
  );

  const columns = useMemo(() => TODAYS_SCHEDULE_TABLE_COLUMNS, []);

  const data = useMemo(
    () => (chosenDaysData === undefined ? [] : chosenDaysData),
    [chosenDaysData]
  );

  const initialState = useMemo(
    () => ({
      pageSize: dailySchedulePageSizeFromLocalStorage
        ? Number(dailySchedulePageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [dailySchedulePageSizeFromLocalStorage]
  );

  const noDataFoundSoReturnedChosenDate =
    dailyBookingsDataResult === "fulfilled" && !data.length && passedChosenDate;

  return {
    columns,
    data,
    initialState,
    noDataFoundSoReturnedChosenDate,
  };
};

export default useDailyScheduleTableVariables;

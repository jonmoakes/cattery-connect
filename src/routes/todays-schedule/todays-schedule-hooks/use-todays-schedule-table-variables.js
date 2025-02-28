import { useMemo } from "react";

import useGetTodaysScheduleSelectors from "../../../hooks/selectors/use-get-todays-schedule-selectors";

import { defaultTableSize } from "../../../constants/constants";
import TODAYS_SCHEDULE_TABLE_COLUMNS from "../todays-schedule-table-columns";

const useTodaysScheduleTableVariables = () => {
  const { todaysBookingsData } = useGetTodaysScheduleSelectors();

  const todaysSchedulePageSizeFromLocalStorage = localStorage.getItem(
    "todaysScheduleChosenTablePageSize"
  );

  const columns = useMemo(() => TODAYS_SCHEDULE_TABLE_COLUMNS, []);

  const data = useMemo(
    () => (todaysBookingsData === undefined ? [] : todaysBookingsData),
    [todaysBookingsData]
  );

  const initialState = useMemo(
    () => ({
      //   sortBy: [{ id: "name", desc: false }],
      pageSize: todaysSchedulePageSizeFromLocalStorage
        ? Number(todaysSchedulePageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [todaysSchedulePageSizeFromLocalStorage]
  );

  return {
    columns,
    data,
    initialState,
  };
};

export default useTodaysScheduleTableVariables;

import { useMemo } from "react";
import { addMonths, format } from "date-fns";

import useGetIncomeSelectors from "../../../hooks/selectors/use-get-income-selectors";

import INCOME_TABLE_COLUMNS from "../income-table-columns";

import { defaultTableSize } from "../../../constants/ui-constants";

const useIncomeVariables = () => {
  const {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    monthOffset,
  } = useGetIncomeSelectors();

  const incomeDataPageSizeFromLocalStorage = localStorage.getItem(
    "incomeDataTablePageSize"
  );
  const data = useMemo(
    () => (sortedIncomeData && sortedIncomeData.length ? sortedIncomeData : []),
    [sortedIncomeData]
  );
  const columns = useMemo(() => INCOME_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [],
      pageSize: incomeDataPageSizeFromLocalStorage
        ? Number(incomeDataPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [incomeDataPageSizeFromLocalStorage]
  );

  const totalInPence =
    data && data.length
      ? data.reduce((total, item) => total + item.amount, 0)
      : 0;
  const totalOfReturnedEntriesInPounds = totalInPence / 100; // Convert pence to pounds

  const currentDate = new Date();
  const displayedDate = addMonths(currentDate, monthOffset);
  const formattedMonth = format(displayedDate, "MMMM yyyy");

  return {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    columns,
    initialState,
    data,
    formattedMonth,
    totalOfReturnedEntriesInPounds,
  };
};

export default useIncomeVariables;

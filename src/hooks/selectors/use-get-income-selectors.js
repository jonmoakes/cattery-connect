import { useSelector } from "react-redux";

import { selectIncomeDataSelectors } from "../../store/income/selectors";

const useGetIncomeSelectors = () => {
  const {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    monthOffset,
  } = useSelector(selectIncomeDataSelectors);

  return {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    monthOffset,
  };
};

export default useGetIncomeSelectors;

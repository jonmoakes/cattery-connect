import { useDispatch } from "react-redux";

import useGetIncomeSelectors from "../../../hooks/selectors/use-get-income-selectors";

import { setMonthOffset } from "../../../store/income/income.slice";

const useIncomeFunctions = () => {
  const { monthOffset } = useGetIncomeSelectors();

  const dispatch = useDispatch();

  const changeMonth = (offsetChange) => {
    const step = offsetChange === "add" ? +1 : -1;
    dispatch(setMonthOffset(monthOffset + step));
  };

  return { changeMonth };
};

export default useIncomeFunctions;

import { useSelector } from "react-redux";

import { selectViewPenDataSelectors } from "../../store/view-pen-data/selectors";

const useGetViewPenDataSelectors = () => {
  const {
    chosenDatePenDataIsLoading,
    chosenDatePenData,
    chosenDatePenDataResult,
    chosenDatePenDataError,
  } = useSelector(selectViewPenDataSelectors);

  const { returnedChosenDate, parsedMorningPens, parsedAfternoonPens } =
    chosenDatePenData ?? {};

  return {
    chosenDatePenDataIsLoading,
    chosenDatePenData,
    chosenDatePenDataResult,
    chosenDatePenDataError,
    returnedChosenDate,
    parsedMorningPens,
    parsedAfternoonPens,
  };
};

export default useGetViewPenDataSelectors;

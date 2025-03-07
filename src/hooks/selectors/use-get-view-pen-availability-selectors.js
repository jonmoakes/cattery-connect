import { useSelector } from "react-redux";

import { selectViewPenAvailabilitySelectors } from "../../store/view-pen-availability/selectors";

const useGetViewPenAvailabilitySelectors = () => {
  const {
    chosenDatePenDataIsLoading,
    chosenDatePenData,
    chosenDatePenDataResult,
    chosenDatePenDataError,
  } = useSelector(selectViewPenAvailabilitySelectors);

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

export default useGetViewPenAvailabilitySelectors;

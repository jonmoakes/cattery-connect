import { useDispatch } from "react-redux";

import useGetViewPenDataSelectors from "../../../hooks/selectors/use-get-view-pen-data-selectors";

import { fetchChosenDaysPenDataAsync } from "../../../store/view-pen-data/view-pen-data.thunks";

import usePastDateDataNotAvailableSwal from "./use-past-date-data-not-available-swal";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

const useHandlePenDataDateChange = () => {
  const { returnedChosenDate } = useGetViewPenDataSelectors();
  const { catteryId } = useGetCurrentUserSelectors();
  const { pastDateDataNotAvailableSwal } = usePastDateDataNotAvailableSwal();

  const dispatch = useDispatch();

  const handlePenDataDateChange = (direction) => {
    let returnedChosenDateAsDateObject = new Date(returnedChosenDate);

    if (direction === "next") {
      returnedChosenDateAsDateObject.setDate(
        returnedChosenDateAsDateObject.getDate() + 1
      );
    } else if (direction === "previous") {
      const today = new Date();
      if (returnedChosenDateAsDateObject > today) {
        returnedChosenDateAsDateObject.setDate(
          returnedChosenDateAsDateObject.getDate() - 1
        );
      } else {
        pastDateDataNotAvailableSwal();
        return;
      }
    }
    dispatch(
      fetchChosenDaysPenDataAsync({
        catteryId,
        chosenDate: returnedChosenDateAsDateObject,
      })
    );
  };

  return { handlePenDataDateChange };
};

export default useHandlePenDataDateChange;

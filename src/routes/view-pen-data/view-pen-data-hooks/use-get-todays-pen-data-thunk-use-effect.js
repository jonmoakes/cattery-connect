import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetViewPenDataSelectors from "../../../hooks/selectors/use-get-view-pen-data-selectors";
import { fetchChosenDaysPenDataAsync } from "../../../store/view-pen-data/view-pen-data.thunks";

const useGetTodaysPenDataThunkUseEffect = () => {
  const { currentUser, catteryId } = useGetCurrentUserSelectors();
  const { chosenDatePenDataResult } = useGetViewPenDataSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || chosenDatePenDataResult) return;

    dispatch(fetchChosenDaysPenDataAsync({ catteryId }));
  }, [currentUser, chosenDatePenDataResult, catteryId, dispatch]);
};

export default useGetTodaysPenDataThunkUseEffect;

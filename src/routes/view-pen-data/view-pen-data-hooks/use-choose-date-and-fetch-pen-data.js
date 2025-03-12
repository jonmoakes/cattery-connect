import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { fetchChosenDaysPenDataAsync } from "../../../store/view-pen-data/view-pen-data.thunks";

const useChooseDateAndFetchPenData = () => {
  const { catteryId } = useGetCurrentUserSelectors();
  const dispatch = useDispatch();

  const chooseDateAndFetchPenData = (chosenDate) => {
    dispatch(fetchChosenDaysPenDataAsync({ catteryId, chosenDate }));
  };

  return { chooseDateAndFetchPenData };
};

export default useChooseDateAndFetchPenData;

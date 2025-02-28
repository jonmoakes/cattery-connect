import { useDispatch } from "react-redux";

import { fetchChosenDaysPenDataAsync } from "../../../store/view-pen-availability/view-pen-availability.thunks";

const useChooseDateAndFetchPenData = () => {
  const dispatch = useDispatch();

  const chooseDateAndFetchPenData = (chosenDate) => {
    dispatch(fetchChosenDaysPenDataAsync({ chosenDate }));
  };

  return { chooseDateAndFetchPenData };
};

export default useChooseDateAndFetchPenData;

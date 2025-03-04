import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { getDailyBookingsDataAsync } from "../../../store/daily-schedule/daily-schedule.thunks";

const useChooseDateAndFetchData = () => {
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const [chosenDate, setChosenDate] = useState(null);

  const chooseDateAndFetchData = (chosenDate) => {
    setChosenDate(chosenDate);
    dispatch(getDailyBookingsDataAsync({ catteryId, chosenDate }));
  };

  return { chosenDate, chooseDateAndFetchData };
};

export default useChooseDateAndFetchData;

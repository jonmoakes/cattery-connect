import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import { getDailyBookingsDataAsync } from "../../../store/daily-schedule/daily-schedule.thunks";

const useChooseDateAndFetchData = () => {
  const { catteryId } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const [chosenDate, setChosenDate] = useState("");

  const chooseDateAndFetchData = (chosenDate, event) => {
    setChosenDate(chosenDate);
    dispatch(getDailyBookingsDataAsync({ catteryId, chosenDate }));

    // Close date picker manually on mobile
    if (event?.target) {
      event.target.blur(); // Forces input field to lose focus
    }
  };

  return { chosenDate, chooseDateAndFetchData };
};

export default useChooseDateAndFetchData;

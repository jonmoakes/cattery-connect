import { useDispatch } from "react-redux";

import { setDateClosedToAdd } from "../../../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

const useHandleDayOffToAddChange = () => {
  const dispatch = useDispatch();

  const handleDayOffToAddChange = (event) => {
    dispatch(setDateClosedToAdd(event.target.value));
  };

  return { handleDayOffToAddChange };
};

export default useHandleDayOffToAddChange;

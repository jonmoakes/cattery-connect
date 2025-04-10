import { useDispatch } from "react-redux";

import { resetDeletePastDatesState } from "../../../store/delete-dates/delete-dates-slice";

const useResetState = () => {
  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(resetDeletePastDatesState());
  };

  return { resetState };
};

export default useResetState;

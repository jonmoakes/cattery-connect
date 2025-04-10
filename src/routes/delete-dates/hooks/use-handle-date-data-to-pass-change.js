import { useDispatch } from "react-redux";

import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";
import { setDateDataToPass } from "../../../store/delete-dates/delete-dates-slice";

const useHandleDateDataToPassChange = () => {
  const { dateDataToPass } = useGetDeleteDatesSelectors();

  const dispatch = useDispatch();

  const handleDateDataToPassChange = (event) => {
    const { value, name } = event.target;
    dispatch(setDateDataToPass({ ...dateDataToPass, [name]: value }));
  };

  return { handleDateDataToPassChange };
};

export default useHandleDateDataToPassChange;

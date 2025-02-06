import { useDispatch } from "react-redux";
import { format } from "date-fns";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import {
  setDateAndPensData,
  setDateClosedToAdd,
} from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

const useHandleDatesAndPensChange = () => {
  const { datesAndPensData } = useGetUploadDatesAndPensDataSelectors();
  const dispatch = useDispatch();

  const handlePensChange = (event) => {
    const { value, name } = event.target;
    dispatch(setDateAndPensData({ ...datesAndPensData, [name]: value }));
  };

  const handleDatesChange = (dateType, date) => {
    dispatch(
      setDateAndPensData({
        ...datesAndPensData,
        [dateType]: format(date, "yyyy-MM-dd"),
      })
    );
  };

  const handleDayOffToAddChange = (date) => {
    dispatch(setDateClosedToAdd(date));
  };

  return {
    handleDayOffToAddChange,
    handleDatesChange,
    handlePensChange,
  };
};

export default useHandleDatesAndPensChange;

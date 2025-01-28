import { useDispatch } from "react-redux";
import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import { setDateAndPensData } from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

const useHandleDatesAndPensChange = () => {
  const { datesAndPensData } = useGetUploadDatesAndPensDataSelectors();
  const dispatch = useDispatch();

  const handleDatesAndPensChange = (event) => {
    const { value, name } = event.target;
    dispatch(setDateAndPensData({ ...datesAndPensData, [name]: value }));
  };

  return {
    handleDatesAndPensChange,
  };
};

export default useHandleDatesAndPensChange;

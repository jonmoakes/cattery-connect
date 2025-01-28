import { useSelector } from "react-redux";
import { selectUploadDatesAndPensDataSelectors } from "../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

const useGetUploadDatesAndPensDataSelectors = () => {
  const {
    uploadDatesAndPensDataIsLoading,
    datesAndPensData,
    datesIncludeDaysClosed,
    dateClosedToAdd,
    datesClosedArray,
    uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError,
  } = useSelector(selectUploadDatesAndPensDataSelectors);

  const {
    catteryId,
    startDate,
    endDate,
    penSpacesForMaxTwoCats,
    penSpacesForMaxThreeCats,
    penSpacesForMaxFourCats,
    penSpacesForMaxFiveCats,
  } = datesAndPensData ?? {};

  return {
    uploadDatesAndPensDataIsLoading,
    datesAndPensData,
    uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError,
    catteryId,
    datesIncludeDaysClosed,
    dateClosedToAdd,
    datesClosedArray,
    startDate,
    endDate,
    penSpacesForMaxTwoCats,
    penSpacesForMaxThreeCats,
    penSpacesForMaxFourCats,
    penSpacesForMaxFiveCats,
  };
};

export default useGetUploadDatesAndPensDataSelectors;

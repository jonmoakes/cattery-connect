import { useSelector } from "react-redux";
import { selectUploadDatesAndPensDataSelectors } from "../../store/upload-dates-and-pens-data/selectors";

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
    penSpacesForAnyNumberOfCats,
    penSpacesForOneOrTwoCats,
    penSpacesForThreeCats,
    penSpacesForFourCats,
    penSpacesForFiveCats,
  } = datesAndPensData ?? {};

  const anyInputOtherInputSet =
    penSpacesForOneOrTwoCats ||
    penSpacesForThreeCats ||
    penSpacesForFourCats ||
    penSpacesForFiveCats;

  const penSpacesForAnyNumberOfCatsHasValue = penSpacesForAnyNumberOfCats;

  const noInputsHaveValues =
    !penSpacesForAnyNumberOfCats &&
    !penSpacesForOneOrTwoCats &&
    !penSpacesForThreeCats &&
    !penSpacesForFourCats &&
    !penSpacesForFiveCats;

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
    anyInputOtherInputSet,
    penSpacesForAnyNumberOfCatsHasValue,
    noInputsHaveValues,
    penSpacesForAnyNumberOfCats,
    penSpacesForOneOrTwoCats,
    penSpacesForThreeCats,
    penSpacesForFourCats,
    penSpacesForFiveCats,
  };
};

export default useGetUploadDatesAndPensDataSelectors;

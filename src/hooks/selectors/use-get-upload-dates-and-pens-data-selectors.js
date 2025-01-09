import { useSelector } from "react-redux";
import { selectUploadDatesAndPensDataSelectors } from "../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

const useGetUploadDatesAndPensDataSelectors = () => {
  const {
    uploadDatesAndPensDataIsLoading,
    datesAndPensData,
    uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError,
  } = useSelector(selectUploadDatesAndPensDataSelectors);

  const { documentId, year, numberofAmPensAvailable, numberofPmPensAvailable } =
    datesAndPensData ?? {};

  return {
    uploadDatesAndPensDataIsLoading,
    datesAndPensData,
    uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError,
    documentId,
    year,
    numberofAmPensAvailable,
    numberofPmPensAvailable,
  };
};

export default useGetUploadDatesAndPensDataSelectors;

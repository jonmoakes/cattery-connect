import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";

import { uploadDatesAndPensAvailabilityDocumentAsync } from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.thunks";

import useMissingStartAndEndDatesSwal from "./swals/use-missing-start-and-end-dates-swal";
import useMissingStartOrEndDateSwal from "./swals/use-missing-start-or-end-date-swal";
import useNoPenDataSwal from "./swals/use-no-pen-data-swal";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUploadDatesAndPensDataMessage } from "../../../../strings/confirms";

const useSubmitUploadDatesAndPensData = () => {
  const {
    startDate,
    endDate,
    noInputsHaveValues,
    datesAndPensData,
    datesClosedArray,
  } = useGetUploadDatesAndPensDataSelectors();

  const { missingStartAndEndDatesSwal } = useMissingStartAndEndDatesSwal();
  const { missingStartOrEndDateSwal } = useMissingStartOrEndDateSwal();
  const { noPenDataSwal } = useNoPenDataSwal();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      uploadDatesAndPensAvailabilityDocumentAsync({
        datesAndPensData,
        datesClosedArray,
      })
    );
  };

  const submitUploadDatesAndPensData = (e) => {
    e.preventDefault();

    if (!startDate && !endDate) {
      missingStartAndEndDatesSwal();
    } else if (!startDate || !endDate) {
      missingStartOrEndDateSwal();
    } else if (noInputsHaveValues) {
      noPenDataSwal();
    } else {
      confirmSwal(
        confirmUploadDatesAndPensDataMessage,
        "",
        "yes",
        "",
        confirmResult,
        null
      );
    }
  };

  return { submitUploadDatesAndPensData };
};

export default useSubmitUploadDatesAndPensData;

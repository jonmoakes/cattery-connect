import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import { uploadDatesAndPensAvailabilityDocumentAsync } from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.thunks";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUploadDatesAndPensDataMessage } from "../../../../strings/confirms";

const useSubmitUploadDatesAndPensData = () => {
  const { datesAndPensData, datesClosedArray } =
    useGetUploadDatesAndPensDataSelectors();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const submitUploadDatesAndPensData = (e) => {
    e.preventDefault();

    confirmSwal(
      confirmUploadDatesAndPensDataMessage,
      "",
      "yes",
      "",
      () =>
        dispatch(
          uploadDatesAndPensAvailabilityDocumentAsync({
            datesAndPensData,
            datesClosedArray,
          })
        ),
      null
    );
  };

  return { submitUploadDatesAndPensData };
};

export default useSubmitUploadDatesAndPensData;

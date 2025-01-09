import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import { uploadDatesAndPensAsync } from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.thunks";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUploadDatesAndPensDataMessage } from "../../../../strings/confirms";
import { generateDatesAndPensInfo } from "../../../../functions/generate-dates-and-pens-info";

const useSubmitUploadDatesAndPensData = () => {
  const { year, numberofAmPensAvailable, numberofPmPensAvailable, documentId } =
    useGetUploadDatesAndPensDataSelectors();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const submitUploadDatesAndPensData = (e) => {
    e.preventDefault();

    const datesAndPensInfo = generateDatesAndPensInfo(
      year,
      numberofAmPensAvailable,
      numberofPmPensAvailable
    );

    const attributeKey = "datesAndPensInfo";

    confirmSwal(
      confirmUploadDatesAndPensDataMessage,
      "",
      "yes",
      "",
      () =>
        dispatch(
          uploadDatesAndPensAsync({
            datesAndPensInfo,
            attributeKey,
            documentId,
          })
        ),
      null
    );
  };

  return { submitUploadDatesAndPensData };
};

export default useSubmitUploadDatesAndPensData;

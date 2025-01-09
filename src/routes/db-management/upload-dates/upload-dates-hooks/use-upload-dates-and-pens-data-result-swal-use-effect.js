import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetUploadDatesAndPensDataSelectors from "../../../../hooks/selectors/use-get-upload-dates-and-pens-data-selectors";
import {
  resetUploadDatesAndPensDataResult,
  resetUploadDatesAndPensDataError,
} from "../../../../store/upload-dates-and-pens-data/upload-dates-and-pens-data.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../../strings/errors";
import { accountRoute } from "../../../../strings/routes";

const useUploadDatesAndPensDataResultSwalUseEffect = () => {
  const { uploadDatesAndPensDataResult, uploadDatesAndPensDataError } =
    useGetUploadDatesAndPensDataSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!uploadDatesAndPensDataResult && !uploadDatesAndPensDataError) return;

    if (uploadDatesAndPensDataResult === "fulfilled") {
      fireSwal("success", "done!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        }
      );
    } else {
      const error = uploadDatesAndPensDataError;
      fireSwal(
        "error",
        errorReceivedMessage("error uploading dates", error),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUploadDatesAndPensDataResult());
          dispatch(resetUploadDatesAndPensDataError());
        }
      });
    }
  }, [
    fireSwal,
    uploadDatesAndPensDataResult,
    uploadDatesAndPensDataError,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useUploadDatesAndPensDataResultSwalUseEffect;

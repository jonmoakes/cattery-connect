import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../../../hooks/selectors/use-get-cat-details-management-selectors";
import {
  resetCatDetailsManagementError,
  resetCatDetailsManagementResult,
} from "../../../../store/cat-details-management/cat-details-management.slice";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { errorReceivedMessage } from "../../../../strings/errors";

const useCatUploadFailedSwal = () => {
  const { catDetailsManagementError } = useGetCatDetailsManagementSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const catUploadFailedSwal = useCallback(
    (action) => {
      fireSwal(
        "error",
        errorReceivedMessage(
          `Error ${action} cat..`,
          catDetailsManagementError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCatDetailsManagementResult());
          dispatch(resetCatDetailsManagementError());
        }
      });
    },
    [catDetailsManagementError, dispatch, fireSwal]
  );

  return { catUploadFailedSwal };
};

export default useCatUploadFailedSwal;

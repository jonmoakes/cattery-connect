import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useGetCatDetailsManagementSelectors from "../../selectors/use-get-cat-details-management-selectors";
import useFireSwal from "../../use-fire-swal";
import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";

import { errorReceivedMessage } from "../../../strings/errors";

const useDeleteCatFailSwal = () => {
  const { deleteCatError } = useGetCatDetailsManagementSelectors();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const deleteCatFailSwal = useCallback(() => {
    fireSwal(
      "error",
      errorReceivedMessage("error deleting cat..", deleteCatError),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetCatDetailsManagementState());
      }
    });
  }, [deleteCatError, dispatch, fireSwal]);

  return { deleteCatFailSwal };
};

export default useDeleteCatFailSwal;

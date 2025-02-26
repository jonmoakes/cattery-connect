import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetCatDetailsManagementState } from "../../../store/cat-details-management/cat-details-management.slice";

import useFireSwal from "../../use-fire-swal";

const useDeleteCatSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  const deleteCatSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      "the cat was deleted!",
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
  }, [dispatch, fireSwal]);

  return { deleteCatSuccessSwal };
};

export default useDeleteCatSuccessSwal;

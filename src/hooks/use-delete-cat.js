import { useDispatch } from "react-redux";
import { deleteCatFromDbAsync } from "../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "./use-confirm-swal";

import { confirmDeleteMessage } from "../strings/confirms";

const useDeleteCat = () => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const deleteCat = (
    catDetailsAfterRemovingCatForDeletion,
    catsName,
    customerDocumentId
  ) => {
    confirmSwal(
      confirmDeleteMessage(catsName),
      "",
      `yes, delete ${catsName}`,
      "don't delete",
      () =>
        dispatch(
          deleteCatFromDbAsync({
            catDetailsAfterRemovingCatForDeletion,
            customerDocumentId,
          })
        ),
      null
    );
  };

  return { deleteCat };
};

export default useDeleteCat;

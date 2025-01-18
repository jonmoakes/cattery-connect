import { useDispatch } from "react-redux";

import { deleteCatFromDbAsync } from "../../../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { confirmDeleteMessage } from "../../../strings/confirms";

const useDeleteCat = () => {
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const deleteCat = (catsName, updatedCats, customerDocumentId) => {
    confirmSwal(
      confirmDeleteMessage(catsName),
      "",
      "yes, delete",
      "don't delete",
      () => dispatch(deleteCatFromDbAsync({ updatedCats, customerDocumentId })),
      null
    );
  };

  return { deleteCat };
};

export default useDeleteCat;

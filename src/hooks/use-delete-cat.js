import { useDispatch } from "react-redux";
import { deleteCatAsync } from "../store/cat-details-management/cat-details-management.thunks";

import useConfirmSwal from "./use-confirm-swal";

import { confirmDeleteMessage } from "../strings/confirms";

const useDeleteCat = () => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const deleteCat = (catsName, catsDocumentId) => {
    const type = "";
    confirmSwal(
      confirmDeleteMessage(catsName, type),
      "",
      `yes, delete ${catsName}`,
      "don't delete",
      () =>
        dispatch(
          deleteCatAsync({
            catsDocumentId,
          })
        ),
      null
    );
  };

  return { deleteCat };
};

export default useDeleteCat;

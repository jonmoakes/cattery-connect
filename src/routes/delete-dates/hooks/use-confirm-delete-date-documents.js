import { useDispatch } from "react-redux";

import useGetDeleteDatesSelectors from "../../../hooks/selectors/use-get-delete-dates-selectors";

import { deleteDateDocumentsAsync } from "../../../store/delete-dates/delete-dates-thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useConfirmDeleteDateDocuments = () => {
  const { dateDocumentsToDelete } = useGetDeleteDatesSelectors();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const confirmDeleteDateDocuments = () => {
    const confirmResult = () => {
      dispatch(deleteDateDocumentsAsync({ dateDocumentsToDelete }));
    };
    confirmSwal(
      `delete these date documents?`,
      "",
      "yes, delete",
      "",
      confirmResult,
      null
    );
  };

  return { confirmDeleteDateDocuments };
};

export default useConfirmDeleteDateDocuments;

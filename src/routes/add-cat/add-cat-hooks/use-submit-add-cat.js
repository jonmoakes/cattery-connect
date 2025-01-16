import { useDispatch } from "react-redux";

import useGetAddCatDetailsSelectors from "../../../hooks/selectors/use-get-add-cat-details-selectors";
import { addCatToDbAsync } from "../../../store/add-cat/add-cat.thunks";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useSubmitAddCat = (documentId) => {
  const { catsName, addCatDetails } = useGetAddCatDetailsSelectors();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const submitAddCat = (e) => {
    e.preventDefault();

    confirmSwal(
      `add ${catsName} to the database?`,
      "",
      "yes",
      "",
      () => dispatch(addCatToDbAsync({ addCatDetails, documentId })),
      null
    );
  };

  return { submitAddCat };
};

export default useSubmitAddCat;

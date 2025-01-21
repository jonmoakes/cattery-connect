import { useDispatch } from "react-redux";

import { deleteCatFromDbAsync } from "../../store/cat-details-management/cat-details-management.thunks";

import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { confirmDeleteMessage } from "../../strings/confirms";

const DeleteCatButton = ({ chosenEntry }) => {
  const { catsName } = chosenEntry ?? "this cat";
  const { customerDocumentId, data } = useCatsTableDataAndFunctions();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const deleteCat = (catsName) => {
    const updatedCats = data
      ? data.filter((cat) => cat.catsId !== (chosenEntry && chosenEntry.catsId))
      : [];

    if (updatedCats) {
      confirmSwal(
        confirmDeleteMessage(catsName),
        "",
        "yes, delete",
        "don't delete",
        () =>
          dispatch(deleteCatFromDbAsync({ updatedCats, customerDocumentId })),
        null
      );
    } else {
      alert("couldn't find cat data to delete");
    }
  };

  return (
    <>
      {chosenEntry ? (
        <EntryOptionsButton
          className="delete"
          type="button"
          onClick={() => deleteCat(catsName)}
        >
          delete cat
        </EntryOptionsButton>
      ) : null}
    </>
  );
};

export default DeleteCatButton;

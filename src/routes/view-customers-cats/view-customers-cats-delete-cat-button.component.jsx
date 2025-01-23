import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import useDeleteCat from "../../hooks/use-delete-cat";

const ViewCustomersCatsDeleteCatButton = ({ chosenEntry }) => {
  const { catsName } = chosenEntry ?? "this cat";
  const { deleteCat } = useDeleteCat();
  const { customerDocumentId, catDetailsAfterRemovingCatForDeletion } =
    useCatsTableDataAndFunctions(chosenEntry);

  return (
    <>
      {chosenEntry ? (
        <EntryOptionsButton
          className="delete"
          type="button"
          onClick={() =>
            deleteCat(
              catDetailsAfterRemovingCatForDeletion,
              catsName,
              customerDocumentId
            )
          }
        >
          delete {chosenEntry.catsName}
        </EntryOptionsButton>
      ) : null}
    </>
  );
};

export default ViewCustomersCatsDeleteCatButton;

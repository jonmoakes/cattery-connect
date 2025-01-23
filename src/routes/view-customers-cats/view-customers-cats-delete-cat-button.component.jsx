import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useDeleteCat from "../../hooks/use-delete-cat";

import { EntryOptionsButton } from "../../styles/button/button.styles";

const ViewCustomersCatsDeleteCatButton = ({ chosenEntry }) => {
  const { catsName } = chosenEntry ?? "this cat";
  const { deleteCat } = useDeleteCat();
  const { customerDocumentId, catDetailsAfterRemovingCatForDeletion } =
    useViewCustomersCatsVariables(chosenEntry);

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

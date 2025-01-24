import useDeleteCat from "../../../hooks/use-delete-cat";

import { EntryOptionsButton } from "../../../styles/button/button.styles";
import useAllCatsTableVariables from "../all-cats-hooks/use-all-cats-table-variables";

const AllCatsDeleteCatButton = ({
  chosenEntry,
  catsName,
  customerDocumentId,
}) => {
  const { data } = useAllCatsTableVariables();
  const { deleteCat } = useDeleteCat();

  const getOwnersCatsFromData = data.filter(
    (cats) =>
      cats.customerDocumentId ===
      (chosenEntry && chosenEntry.customerDocumentId)
  );

  const catDetailsAfterRemovingCatForDeletion = getOwnersCatsFromData
    ? getOwnersCatsFromData.filter(
        (cat) => cat.catsId !== (chosenEntry && chosenEntry.catsId)
      )
    : [];

  return (
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
      delete {catsName}
    </EntryOptionsButton>
  );
};

export default AllCatsDeleteCatButton;

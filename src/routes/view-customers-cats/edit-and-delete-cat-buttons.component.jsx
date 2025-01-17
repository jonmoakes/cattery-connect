import useDeleteCat from "./view-customers-cats-hooks.js/use-delete-cat";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const EditAndDeleteCatButtons = ({ data, chosenEntry, customerDocumentId }) => {
  const { deleteCat } = useDeleteCat();
  const updatedCats = data
    ? data.filter((cat) => cat.catsId !== (chosenEntry && chosenEntry.catsId))
    : [];
  const { catsName } = chosenEntry ?? {};

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton className="edit" type="button">
            edit cat
          </EntryOptionsButton>

          <EntryOptionsButton
            className="delete"
            type="button"
            onClick={() => deleteCat(catsName, updatedCats, customerDocumentId)}
          >
            delete cat
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default EditAndDeleteCatButtons;

import useDeleteCat from "./view-customers-cats-hooks/use-delete-cat";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

import { editCatRoute } from "../../strings/routes";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

const EditAndDeleteCatButtons = ({ data, chosenEntry, customerDocumentId }) => {
  const updatedCats = data
    ? data.filter((cat) => cat.catsId !== (chosenEntry && chosenEntry.catsId))
    : [];
  const { catsName } = chosenEntry ?? {};

  const { deleteCat } = useDeleteCat();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="edit"
            type="button"
            onClick={() =>
              hamburgerHandlerNavigate(editCatRoute, {
                customerDocumentId: customerDocumentId,
                chosenEntry,
              })
            }
          >
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

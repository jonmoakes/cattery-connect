import useDeleteCat from "../../hooks/use-delete-cat";

import { EntryOptionsButton } from "../../styles/button/button.styles";

const DeleteCatButton = ({ catsName, catsDocumentId }) => {
  const { deleteCat } = useDeleteCat();

  return (
    <EntryOptionsButton
      className="delete"
      type="button"
      onClick={() => deleteCat(catsName, catsDocumentId)}
    >
      delete {catsName}
    </EntryOptionsButton>
  );
};

export default DeleteCatButton;

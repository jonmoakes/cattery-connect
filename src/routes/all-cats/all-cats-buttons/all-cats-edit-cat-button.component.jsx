import useAllCatsTableFunctions from "../all-cats-hooks/use-all-cats-table-functions";

import { EntryOptionsButton } from "../../../styles/button/button.styles";

const AllCatsEditCatButton = ({
  chosenEntry,
  customerDocumentId,
  catsName,
}) => {
  const { setDataForCatEditingAndGoToEditCatRoute } =
    useAllCatsTableFunctions();

  return (
    <>
      <EntryOptionsButton
        className="edit"
        type="button"
        onClick={() =>
          setDataForCatEditingAndGoToEditCatRoute(
            chosenEntry,
            customerDocumentId
          )
        }
      >
        edit {catsName}
      </EntryOptionsButton>
    </>
  );
};

export default AllCatsEditCatButton;

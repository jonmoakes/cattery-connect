import useSetDetailsRequiredForCatManagementAndNavigate from "./table-hooks/use-set-details-required-for-cat-management-and-navigate";

import { EntryOptionsButton } from "../../styles/button/button.styles";

const EditCatButton = ({ chosenEntry, fromRoute, catsName }) => {
  const { setDataForCatEditingAndGoToEditCatRoute } =
    useSetDetailsRequiredForCatManagementAndNavigate();

  return (
    <>
      <EntryOptionsButton
        className="edit"
        type="button"
        onClick={() =>
          setDataForCatEditingAndGoToEditCatRoute(chosenEntry, fromRoute)
        }
      >
        edit {catsName}
      </EntryOptionsButton>
    </>
  );
};

export default EditCatButton;

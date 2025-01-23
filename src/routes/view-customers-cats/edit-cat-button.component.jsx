import { EntryOptionsButton } from "../../styles/button/button.styles";

import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";

const EditCatButton = ({ chosenEntry }) => {
  const { setCatDetailsForEditingAndGoToEditCatRoute } =
    useViewCustomersCatsFunctions(chosenEntry);

  return (
    <>
      {chosenEntry ? (
        <EntryOptionsButton
          className="edit"
          type="button"
          onClick={setCatDetailsForEditingAndGoToEditCatRoute}
        >
          edit {chosenEntry.catsName}
        </EntryOptionsButton>
      ) : null}
    </>
  );
};

export default EditCatButton;

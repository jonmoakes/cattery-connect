import { useDispatch } from "react-redux";

import { setDataToBePassed } from "../../store/data-to-be-passed/data-to-be-passed.slice";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { editCatRoute } from "../../strings/routes";

const EditCatButton = ({ chosenEntry }) => {
  const { customerDocumentId } = useCatsTableDataAndFunctions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const setDataAndNavigate = () => {
    dispatch(setDataToBePassed({ customerDocumentId, catToEdit: chosenEntry }));
    hamburgerHandlerNavigate(editCatRoute);
  };

  return (
    <>
      {chosenEntry ? (
        <EntryOptionsButton
          className="edit"
          type="button"
          onClick={setDataAndNavigate}
        >
          edit cat
        </EntryOptionsButton>
      ) : null}
    </>
  );
};

export default EditCatButton;

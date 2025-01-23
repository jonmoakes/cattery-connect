import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";

import { editCatRoute, viewCustomersCatsRoute } from "../../strings/routes";
import {
  setCatDetailForFormComparison,
  setCatDetails,
  setDetailsRequiredForCatManagement,
} from "../../store/cat-details-management/cat-details-management.slice";

const EditCatButton = ({ chosenEntry }) => {
  const { customerDocumentId } = useCatsTableDataAndFunctions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const setDataAndNavigate = () => {
    dispatch(setCatDetails(chosenEntry));
    dispatch(setCatDetailForFormComparison(chosenEntry));
    dispatch(setDetailsRequiredForCatManagement({ customerDocumentId }));
    hamburgerHandlerNavigate(editCatRoute, {
      fromRoute: viewCustomersCatsRoute,
    });
  };

  return (
    <>
      {chosenEntry ? (
        <EntryOptionsButton
          className="edit"
          type="button"
          onClick={setDataAndNavigate}
        >
          edit {chosenEntry.catsName}
        </EntryOptionsButton>
      ) : null}
    </>
  );
};

export default EditCatButton;

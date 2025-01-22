import useAllCatsTableFunctions from "./all-cats-hooks/use-all-cats-table-functions";
import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const AllCatsTableButtons = ({
  chosenEntry,
  selectedCatsOwnerCustomerId,
  catsName,
  customerDocumentId,
}) => {
  const {
    setSelectedCatsOwnersCustomerIdAndCatsName,
    setDataForCatEditingAndGoToEditCatRoute,
    resetGetAllCatStateAndRefetchAllCats,
  } = useAllCatsTableFunctions();
  const { hasCatsOwnerDetails } = useAllCatsTableVariables();

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="showOwner"
            type="button"
            onClick={() =>
              setSelectedCatsOwnersCustomerIdAndCatsName(
                selectedCatsOwnerCustomerId,
                catsName
              )
            }
          >
            show owner details
          </EntryOptionsButton>

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
            edit cat
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : hasCatsOwnerDetails ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="edit"
            type="button"
            onClick={resetGetAllCatStateAndRefetchAllCats}
          >
            show all cats
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default AllCatsTableButtons;

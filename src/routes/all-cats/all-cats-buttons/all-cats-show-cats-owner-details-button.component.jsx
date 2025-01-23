import useAllCatsTableFunctions from "../all-cats-hooks/use-all-cats-table-functions";

import { EntryOptionsButton } from "../../../styles/button/button.styles";

const AllCatsShowCatsOwnerDetailsButton = ({
  chosenEntry,
  selectedCatsOwnerCustomerId,
  catsName,
}) => {
  const { setSelectedCatsOwnersCustomerIdAndCatsName } =
    useAllCatsTableFunctions();

  return (
    <>
      {chosenEntry ? (
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
      ) : null}
    </>
  );
};

export default AllCatsShowCatsOwnerDetailsButton;

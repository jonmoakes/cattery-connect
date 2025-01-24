import useAllCatsTableFunctions from "../all-cats-hooks/use-all-cats-table-functions";

import { EntryOptionsButton } from "../../../styles/button/button.styles";

const AllCatsShowCatsOwnerDetailsButton = ({
  selectedCatsOwnerCustomerId,
  catsName,
}) => {
  const { setSelectedCatsOwnersCustomerIdAndCatsName } =
    useAllCatsTableFunctions();

  return (
    <>
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
    </>
  );
};

export default AllCatsShowCatsOwnerDetailsButton;

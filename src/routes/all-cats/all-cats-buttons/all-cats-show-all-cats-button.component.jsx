import useAllCatsTableFunctions from "../all-cats-hooks/use-all-cats-table-functions";

import { EntryOptionsButton } from "../../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../../styles/div/div.styles";

const AllCatsShowAllCatsButton = () => {
  const { resetGetAllCatStateAndRefetchAllCats } = useAllCatsTableFunctions();

  return (
    <TableOptionsButtonDiv>
      <EntryOptionsButton
        className="showAllCats"
        type="button"
        onClick={resetGetAllCatStateAndRefetchAllCats}
      >
        show all cats
      </EntryOptionsButton>
    </TableOptionsButtonDiv>
  );
};

export default AllCatsShowAllCatsButton;

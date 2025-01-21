import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const TitleAndAddCatLink = () => {
  const {
    customerName,
    hasCustomerIDAndAtLeastOneCat,
    goToAddCatRoutePassingNoExtraData,
  } = useCatsTableDataAndFunctions();

  return (
    <ParentDiv>
      {customerName ? (
        <h1>{getFirstNameFromString(customerName)}'s cats</h1>
      ) : (
        <h1>no cats found</h1>
      )}

      {hasCustomerIDAndAtLeastOneCat ? (
        <MinimalButton
          className="margin-bottom"
          onClick={goToAddCatRoutePassingNoExtraData}
        >
          add another cat
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCatLink;

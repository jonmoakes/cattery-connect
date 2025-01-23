import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";
import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const TitleAndAddCatLink = () => {
  const { customerName, hasCustomerIDAndAtLeastOneCat } =
    useViewCustomersCatsVariables();
  const { goToAddCatRoutePassingNoExtraData } = useViewCustomersCatsFunctions();

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

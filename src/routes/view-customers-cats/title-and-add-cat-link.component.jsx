import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

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
        <CustomBalancedText type="h1">
          {getFirstNameFromString(customerName)}'s cats
        </CustomBalancedText>
      ) : (
        <CustomBalancedText type="h1">no cats found</CustomBalancedText>
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

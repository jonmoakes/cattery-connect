import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";
import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { MinimalButton } from "../../styles/button/button.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndAddCatLink = () => {
  const { customerName, hasCustomerIDAndAtLeastOneCat } =
    useViewCustomersCatsVariables();
  const { goToAddCatRoutePassingFromRoute } = useViewCustomersCatsFunctions();

  return (
    <ParentDiv>
      <CustomBalancedText type="h1">
        {customerName
          ? `${customerName}${customerName.endsWith("s") ? "'" : "'s"} cats`
          : "Customer's cats"}
      </CustomBalancedText>

      {hasCustomerIDAndAtLeastOneCat ? (
        <MinimalButton
          className="margin-bottom"
          onClick={goToAddCatRoutePassingFromRoute}
        >
          add another cat
        </MinimalButton>
      ) : null}
    </ParentDiv>
  );
};

export default TitleAndAddCatLink;

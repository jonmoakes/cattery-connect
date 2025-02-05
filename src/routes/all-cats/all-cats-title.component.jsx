import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import { addCatChooseOwnerRoute } from "../../strings/routes";

const AllCatsTitle = () => {
  const { hasCatsOwnerDetails, selectedCatsName, atLeastOneCustomerExists } =
    useAllCatsTableVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      <ParentDiv>
        <CustomBalancedText type="h1">
          {!hasCatsOwnerDetails
            ? "all cats"
            : `${selectedCatsName}'s owner details`}
        </CustomBalancedText>

        {atLeastOneCustomerExists ? (
          <MinimalButton
            className="margin-bottom"
            onClick={() => hamburgerHandlerNavigate(addCatChooseOwnerRoute)}
          >
            add a cat
          </MinimalButton>
        ) : null}
      </ParentDiv>
    </>
  );
};

export default AllCatsTitle;

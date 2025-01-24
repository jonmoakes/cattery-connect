import Balancer from "react-wrap-balancer";

import useAllCatsTableVariables from "./all-cats-hooks/use-all-cats-table-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

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
        <h1>
          <Balancer>
            {!hasCatsOwnerDetails
              ? "all cats"
              : `${selectedCatsName}'s owner details`}
          </Balancer>
        </h1>

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

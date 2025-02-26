import { useLocation } from "react-router-dom";

import useEditCatVariables from "./edit-cat-hooks/use-edit-cat-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import {
  allCatsRoute,
  allCustomersRoute,
  viewCustomersCatsRoute,
} from "../../strings/routes";

const EditCatTitleAndLoader = () => {
  const { catDetailManagementIsLoading, catsName } = useEditCatVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const location = useLocation();
  const fromRoute = location.state?.fromRoute;

  const destinations = {
    [viewCustomersCatsRoute]: allCustomersRoute,
    [allCatsRoute]: allCatsRoute,
  };

  const buttonTexts = {
    [viewCustomersCatsRoute]: "customers table",
    [allCatsRoute]: "cats table",
  };

  const destination = destinations[fromRoute] || allCatsRoute;
  const buttonText = buttonTexts[fromRoute] || "cats table";

  return (
    <>
      {catDetailManagementIsLoading && (
        <SkeletonBox loadingText={`updating ${catsName}...`} />
      )}

      <ParentDiv>
        <CustomBalancedText type="h1">edit {catsName}</CustomBalancedText>
        <MinimalButton
          className="margin-bottom"
          onClick={() => hamburgerHandlerNavigate(destination)}
        >
          back to {buttonText}
        </MinimalButton>
      </ParentDiv>
    </>
  );
};

export default EditCatTitleAndLoader;

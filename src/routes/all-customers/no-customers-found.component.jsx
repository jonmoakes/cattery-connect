import useAllCatsTableVariables from "../all-cats/all-cats-hooks/use-all-cats-table-variables";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { MinimalButton } from "../../styles/button/button.styles";

import { addCustomerRoute } from "../../strings/routes";

const NoCustomersFound = ({ data }) => {
  const { atLeastOneCustomerExists } = useAllCatsTableVariables();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <h2>no customers found.</h2>
          <CustomBalancedText>
            no customers have been created yet.
          </CustomBalancedText>

          {!atLeastOneCustomerExists ? (
            <MinimalButton
              className="margin-bottom"
              onClick={() => hamburgerHandlerNavigate(addCustomerRoute)}
            >
              add a customer
            </MinimalButton>
          ) : null}
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCustomersFound;

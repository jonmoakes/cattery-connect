import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";
import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NoCatsFound = () => {
  const { data, customerName } = useViewCustomersCatsVariables();
  const { goToAddCatRoutePassingFromRoute } = useViewCustomersCatsFunctions();

  return (
    <>
      {!data.length ? (
        <ParentDiv>
          <CustomBalancedText>
            no cats have been created for this customer yet.
          </CustomBalancedText>

          <CustomBalancedText>
            you can add a cat for {getFirstNameFromString(customerName)} by
            tapping on the button below.
          </CustomBalancedText>
          <RadialTealButton onClick={goToAddCatRoutePassingFromRoute}>
            add a cat
          </RadialTealButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCatsFound;

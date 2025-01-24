import Balancer from "react-wrap-balancer";

import useViewCustomersCatsFunctions from "./view-customers-cats-hooks/use-view-customers-cats-functions";
import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";

import ViewCatsNoRequiredObject from "./view-cats-no-required-object.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { RadialTealButton } from "../../styles/button/button.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NoCatsFound = () => {
  const { catDetails, data, customerName } = useViewCustomersCatsVariables();
  const { goToAddCatRoutePassingNoExtraData } = useViewCustomersCatsFunctions();

  return (
    <>
      {catDetails === undefined ? (
        <ViewCatsNoRequiredObject />
      ) : !data.length ? (
        <ParentDiv>
          <p>
            <Balancer>
              no cats have been created for this customer yet.
            </Balancer>
          </p>

          <p>
            you can add a cat for {getFirstNameFromString(customerName)} by
            tapping on the button below.
          </p>
          <RadialTealButton onClick={goToAddCatRoutePassingNoExtraData}>
            add a cat
          </RadialTealButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCatsFound;

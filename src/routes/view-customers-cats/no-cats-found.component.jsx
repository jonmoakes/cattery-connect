import Balancer from "react-wrap-balancer";

import useCatsTableDataAndFunctions from "./view-customers-cats-hooks/use-cats-table-data-and-functions";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Button } from "../../styles/button/button.styles";

import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const NoCatsFound = () => {
  const { data, customerName, goToAddCatRoutePassingNoExtraData } =
    useCatsTableDataAndFunctions();

  return (
    <>
      {!data.length ? (
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
          <Button className="teal" onClick={goToAddCatRoutePassingNoExtraData}>
            add a cat
          </Button>

          <BlackHr />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoCatsFound;

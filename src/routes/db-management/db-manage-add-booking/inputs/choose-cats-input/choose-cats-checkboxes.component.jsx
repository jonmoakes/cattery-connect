import Balancer from "react-wrap-balancer";
import useCustomersCatsLogic from "../../db-manage-add-booking-hooks/use-customers-cats-logic";
import OneCatInfo from "./one-cat-info.component";

import { WhiteText } from "../../../../../styles/p/p.styles";

const ChooseCatCheckboxes = () => {
  const { customerHasOneCat, catsToRender, customerHasMoreThanOneCat } =
    useCustomersCatsLogic();

  return (
    <>
      {customerHasOneCat ? (
        <OneCatInfo {...{ catsToRender }} />
      ) : customerHasMoreThanOneCat ? (
        <>
          <WhiteText>
            <Balancer>
              please select which cats are going to be in the booking:
            </Balancer>
          </WhiteText>

          {catsToRender.map((cat) => {
            const { catsId, catsName } = cat;
            return (
              <div key={catsId}>
                <p>{catsName}</p>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ChooseCatCheckboxes;

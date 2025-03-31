import useGetMoveCustomerToNewCatterySelectors from "../../hooks/selectors/use-get-move-customer-to-new-cattery-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import { AnimatedDiv } from "../../styles/div/div.styles";

const MissingOrCustomerCantBeMovedInfo = () => {
  const { customerCanBeMoved, checkCustomerCanBeMovedResult } =
    useGetMoveCustomerToNewCatterySelectors();

  return (
    <>
      {!Object.keys(checkCustomerCanBeMovedResult)
        .length ? null : customerCanBeMoved === "customer doesn't exist" ? (
        <AnimatedDiv>
          <CustomBalancedText>
            the customer with this customer ID doesn't exist.
          </CustomBalancedText>
        </AnimatedDiv>
      ) : !customerCanBeMoved ? (
        <AnimatedDiv>
          <CustomBalancedText>
            this customer cannot be moved as they have outstanding payments at
            their current cattery.
          </CustomBalancedText>
          <CustomBalancedText>inform the cattery owner.</CustomBalancedText>
        </AnimatedDiv>
      ) : null}
    </>
  );
};

export default MissingOrCustomerCantBeMovedInfo;

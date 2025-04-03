import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";
import useConfirmUpdatePrice from "./hooks/use-confirm-update-price";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../styles/button/button.styles";

const ConfirmNewPriceButton = () => {
  const { newPrice } = useGetUpdatePriceSelectors();
  const { confirmUpdatePrice } = useConfirmUpdatePrice();

  return (
    <>
      {newPrice ? (
        <>
          <CustomBalancedText>
            if you are happy with this new price, tap the 'update price' button
            below.
          </CustomBalancedText>
          <CustomBalancedText>
            you will have a chance to confirm again before updating the price.
          </CustomBalancedText>
          <Button
            type="button"
            className="teal animate"
            onClick={confirmUpdatePrice}
          >
            update price
          </Button>
        </>
      ) : null}
    </>
  );
};

export default ConfirmNewPriceButton;

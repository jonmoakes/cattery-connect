import useConfirmUpdatePrice from "./hooks/use-confirm-update-price";
import useUpdatePriceLogic from "./hooks/use-update-price-logic";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Button } from "../../styles/button/button.styles";

const UpdatePriceButton = () => {
  const { pricesHaventChanged } = useUpdatePriceLogic();
  const { confirmUpdatePrice } = useConfirmUpdatePrice();

  return (
    <>
      {pricesHaventChanged ? (
        <CustomBalancedText>
          once you change your prices, the button to submit the changes will
          appear here.
        </CustomBalancedText>
      ) : (
        <Button
          className="update-prices"
          type="button"
          onClick={confirmUpdatePrice}
        >
          update prices
        </Button>
      )}
    </>
  );
};

export default UpdatePriceButton;

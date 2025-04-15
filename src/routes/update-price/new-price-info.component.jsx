import useUpdatePriceLogic from "./hooks/use-update-price-logic";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

const NewPriceInfo = ({ numberOfCats, price }) => {
  const { pricesHaventChanged, getCatsTailString } = useUpdatePriceLogic();

  return (
    <>
      {!pricesHaventChanged ? (
        <CustomBalancedText>
          new price for {numberOfCats} {getCatsTailString(numberOfCats)} will
          be:
          <br />
          <CustomSpan className="yellow">
            £{(price / 100).toFixed(2)}
          </CustomSpan>
        </CustomBalancedText>
      ) : null}
    </>
  );
};

export default NewPriceInfo;

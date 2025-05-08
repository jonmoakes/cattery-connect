import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

const Instructions = ({ chargesBy }) => (
  <>
    <CustomBalancedText>below are your current prices.</CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan className="red">Important:</CustomSpan> Please enter all new
      prices in PENCE (e.g., 1000 for £10 per {chargesBy}
      ). This is due to how pricing is handled in our database.
    </CustomBalancedText>

    <CustomBalancedText>
      if you have more than one price option, You can update multiple prices at
      once — simply leave any prices you don’t want to change as they are.
    </CustomBalancedText>
    <CustomBalancedText>
      Once you’ve made the updates, tap the ‘Confirm Update Prices’ button when
      it appears.
    </CustomBalancedText>
    <CustomBalancedText>
      <CustomSpan className="red">Important:</CustomSpan> please Double-check
      the prices you’ve entered before submitting the changes to avoid any
      errors.
    </CustomBalancedText>
    <CustomBalancedText>
      you will see the price in pounds directly under the input of each price
      once you have changed it.
    </CustomBalancedText>
  </>
);

export default Instructions;

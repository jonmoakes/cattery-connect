import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

const AddCatInstructions = () => (
  <>
    <CustomBalancedText>
      please enter the details about the cat that you want to add.
    </CustomBalancedText>
    <CustomBalancedText>
      inputs marked with a <CustomSpan className="red">*</CustomSpan> next to
      their name are required.
    </CustomBalancedText>
  </>
);

export default AddCatInstructions;

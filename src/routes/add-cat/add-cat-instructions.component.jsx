import Balancer from "react-wrap-balancer";
import { RedSpan } from "../../styles/span/span.styles";

const AddCatInstructions = () => (
  <>
    <p>
      <Balancer>
        please enter the details about the cat that you want to add.
      </Balancer>
    </p>
    <p>
      <Balancer>
        inputs marked with a <RedSpan>*</RedSpan> next to their name are
        required.
      </Balancer>
    </p>
  </>
);

export default AddCatInstructions;

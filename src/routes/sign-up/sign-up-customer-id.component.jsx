import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";

import CustomSpan from "../../components/custom-span/custom-span.component";
import { Label, StyledInput } from "../../styles/form/form.styles";
import HelpAccordion from "../../components/help-accordion/help-accordion.component";
import { signUpAccordionData } from "./sign-up-accordion-data";

const SignUpCustomerId = ({ handleSignUpFormChange }) => {
  const { customerId } = useGetSignUpFormSelectors();

  return (
    <>
      <HelpAccordion
        className="customer-id"
        openText="what is the customer ID for?"
        data={signUpAccordionData}
      />

      <Label>
        <CustomSpan className="red">* </CustomSpan>Customer ID:
      </Label>

      <StyledInput
        type="text"
        name="customerId"
        value={customerId || ""}
        onChange={handleSignUpFormChange}
        placeholder="( from cattery - case sensitive )"
        required
      />
    </>
  );
};

export default SignUpCustomerId;

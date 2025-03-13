import useGetSignUpFormSelectors from "../../hooks/selectors/use-get-sign-up-form-selectors";

import CustomSpan from "../../components/custom-span/custom-span.component";
import { Label, StyledInput } from "../../styles/form/form.styles";

const SignUpCustomerId = ({ handleSignUpFormChange }) => {
  const { customerId } = useGetSignUpFormSelectors();

  return (
    <>
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

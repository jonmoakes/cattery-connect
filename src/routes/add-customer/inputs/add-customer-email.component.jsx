import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";

const AddCustomerEmail = ({ handleAddCustomerDetailsChange }) => {
  const { email } = useGetAddCustomerDetailsSelectors();

  return (
    <>
      <Label>customer email:</Label>

      <StyledInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleAddCustomerDetailsChange}
      />
    </>
  );
};

export default AddCustomerEmail;

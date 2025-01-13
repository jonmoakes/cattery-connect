import PropTypes from "prop-types";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";

const AddCustomerEmail = ({ handleAddCustomerDetailsChange }) => {
  const { email } = useGetCustomerDetailsSelectors();

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

AddCustomerEmail.propTypes = {
  handleAddCustomerDetailsChange: PropTypes.func.isRequired,
};

export default AddCustomerEmail;

import PropTypes from "prop-types";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerName = ({ handleAddCustomerDetailsChange }) => {
  const { name } = useGetCustomerDetailsSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        customer name:
      </Label>

      <StyledInput
        type="text"
        name="name"
        value={name || ""}
        onChange={handleAddCustomerDetailsChange}
        required
      />
    </>
  );
};

AddCustomerName.propTypes = {
  handleAddCustomerDetailsChange: PropTypes.func.isRequired,
};

export default AddCustomerName;

import PropTypes from "prop-types";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import { Label, StyledTextArea } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerAddress = ({ handleAddCustomerDetailsChange }) => {
  const { address } = useGetCustomerDetailsSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        customer address:
      </Label>

      <StyledTextArea
        type="text"
        name="address"
        value={address || ""}
        onChange={handleAddCustomerDetailsChange}
        required
      />
    </>
  );
};

AddCustomerAddress.propTypes = {
  handleAddCustomerDetailsChange: PropTypes.func.isRequired,
};

export default AddCustomerAddress;

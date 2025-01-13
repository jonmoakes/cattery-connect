import PropTypes from "prop-types";

import useGetCustomerDetailsSelectors from "../../../hooks/selectors/use-get-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerPhoneNumber = ({ handleAddCustomerDetailsChange }) => {
  const { phoneNumber } = useGetCustomerDetailsSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>
        phone number:
      </Label>

      <StyledInput
        type="tel"
        name="phoneNumber"
        value={phoneNumber || ""}
        onChange={handleAddCustomerDetailsChange}
      />
    </>
  );
};

AddCustomerPhoneNumber.propTypes = {
  handleAddCustomerDetailsChange: PropTypes.func.isRequired,
};

export default AddCustomerPhoneNumber;

import useGetAddCustomerDetailsSelectors from "../../../hooks/selectors/use-get-add-customer-details-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const AddCustomerName = ({ handleAddCustomerDetailsChange }) => {
  const { name } = useGetAddCustomerDetailsSelectors();

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

export default AddCustomerName;

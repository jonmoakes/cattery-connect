import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const CustomerNameInput = ({ handleCustomerDetailsChange }) => {
  const { name } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <RedSpan>* </RedSpan>
        name:
      </Label>

      <StyledInput
        type="text"
        name="name"
        value={name || ""}
        onChange={handleCustomerDetailsChange}
        required
      />
    </>
  );
};

export default CustomerNameInput;

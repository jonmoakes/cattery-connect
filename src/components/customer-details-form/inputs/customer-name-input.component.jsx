import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import CustomSpan from "../../custom-span/custom-span.component";

import { StyledInput, Label } from "../../../styles/form/form.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CustomerNameInput = ({ handleCustomerDetailsChange }) => {
  const { name } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <BlackHr />
      <Label>
        <CustomSpan>* </CustomSpan>
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

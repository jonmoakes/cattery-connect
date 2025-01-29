import useGetAllCustomerSelectors from "../../../../hooks/selectors/use-get-all-customers-selectors";

import useHandleCustomerSelectChange from "../db-manage-add-booking-hooks/use-handle-customer-select-change";

import { Label, StyledSelect } from "../../../../styles/form/form.styles";
import { RedSpan } from "../../../../styles/span/span.styles";

const ChooseCustomerSelectInput = () => {
  const { customerName, handleCustomerSelectChange } =
    useHandleCustomerSelectChange();
  const { allCustomers } = useGetAllCustomerSelectors();

  return (
    <>
      <Label>
        <RedSpan>* </RedSpan>choose customer:
      </Label>

      <StyledSelect value={customerName} onChange={handleCustomerSelectChange}>
        <option value="">-- Select a Customer --</option>
        {allCustomers.map((customer) => {
          const { customerId, name } = customer;
          return (
            <option key={customerId} value={name}>
              {name}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
};

export default ChooseCustomerSelectInput;

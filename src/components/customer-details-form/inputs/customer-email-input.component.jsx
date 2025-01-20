import useGetCustomerDetailsManagementSelectors from "../../../hooks/selectors/use-get-customer-details-management-selectors";

import { Label, LowercasedInput } from "../../../styles/form/form.styles";

const CustomerEmailInput = ({ handleCustomerDetailsChange }) => {
  const { email } = useGetCustomerDetailsManagementSelectors();

  return (
    <>
      <Label>customer email:</Label>

      <LowercasedInput
        type="email"
        name="email"
        value={email || ""}
        onChange={handleCustomerDetailsChange}
      />
    </>
  );
};

export default CustomerEmailInput;

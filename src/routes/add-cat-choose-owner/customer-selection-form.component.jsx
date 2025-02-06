import useGetAllCustomerSelectors from "../../hooks/selectors/use-get-all-customers-selectors";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

import { Form, StyledSelect } from "../../styles/form/form.styles";

const CustomerSelectionForm = ({
  selectedCustomer,
  handleCustomerSelectionChange,
}) => {
  const { allCustomers } = useGetAllCustomerSelectors();

  return (
    <>
      <CustomBalancedText>
        to add a cat, please first select the owner of the cat from the list
        below.
      </CustomBalancedText>

      <Form className="select-form">
        <StyledSelect
          value={selectedCustomer}
          onChange={handleCustomerSelectionChange}
        >
          <option value="" disabled>
            -- Select a Customer --
          </option>
          {allCustomers.map((customer) => (
            <option key={customer.$id} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </StyledSelect>
      </Form>
    </>
  );
};

export default CustomerSelectionForm;

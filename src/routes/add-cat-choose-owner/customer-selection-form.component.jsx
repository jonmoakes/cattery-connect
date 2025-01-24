import Balancer from "react-wrap-balancer";
import { Form, StyledSelect } from "../../styles/form/form.styles";
import useGetAllCustomerSelectors from "../../hooks/selectors/use-get-all-customers-selectors";

const CustomerSelectionForm = ({
  selectedCustomer,
  handleCustomerSelectionChange,
}) => {
  const { allCustomers } = useGetAllCustomerSelectors();

  return (
    <>
      <p>
        <Balancer>
          to add a cat, please first select the owner of the cat from the list
          below.
        </Balancer>
      </p>

      <Form className="no-margin-top">
        <StyledSelect
          value={selectedCustomer}
          onChange={handleCustomerSelectionChange}
        >
          <option value="">-- Select a Customer --</option>
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

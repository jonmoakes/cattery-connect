import useEditCustomerResultSwalUseEffect from "./edit-customer-hooks/use-edit-customer-result-swal-use-effect";

import CustomerDetailsTitleAndLoader from "../../components/customer-details-form/customer-details-title-and-loader.component";
import CustomerDetailsForm from "../../components/customer-details-form/customer-details-form.component";

import { Container } from "../../styles/container/container.styles";

const EditCustomer = () => {
  useEditCustomerResultSwalUseEffect();

  return (
    <Container>
      <CustomerDetailsTitleAndLoader />
      <CustomerDetailsForm />
    </Container>
  );
};

export default EditCustomer;

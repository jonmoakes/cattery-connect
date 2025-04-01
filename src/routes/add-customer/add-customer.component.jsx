import useAddCustomerResultSwalUseEffect from "./add-customer-hooks/use-add-customer-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import CustomerDetailsTitleAndLoader from "../../components/customer-details-form/customer-details-title-and-loader.component";
import CustomerDetailsForm from "../../components/customer-details-form/customer-details-form.component";

import { Container } from "../../styles/container/container.styles";

const AddCustomer = () => {
  useAddCustomerResultSwalUseEffect();
  return (
    <Container>
      <Metadata
        title="Cattery Connect - Add Customer"
        description="Register a new customer in Cattery Connect. Store their details to manage bookings and cat profiles efficiently."
      />
      <CustomerDetailsTitleAndLoader />
      <CustomerDetailsForm />
    </Container>
  );
};

export default AddCustomer;

import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";
import useEditCustomerResultSwalUseEffect from "./edit-customer-hooks/use-edit-customer-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import CustomerDetailsTitleAndLoader from "../../components/customer-details-form/customer-details-title-and-loader.component";
import CustomerDetailsForm from "../../components/customer-details-form/customer-details-form.component";
import NoCustomerDetailsFound from "./no-customer-details-found.component";

import { Container } from "../../styles/container/container.styles";

const EditCustomer = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();

  useEditCustomerResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Edit Customer"
        description="Update the details of an existing customer in your cattery. Edit contact information and more."
      />
      <CustomerDetailsTitleAndLoader />
      {Object.values(customerDetails).every((value) => value === "") ? (
        <NoCustomerDetailsFound />
      ) : (
        <>
          <CustomerDetailsForm />
        </>
      )}
    </Container>
  );
};

export default EditCustomer;

import useEditCustomerResultSwalUseEffect from "./edit-customer-hooks/use-edit-customer-result-swal-use-effect";

import CustomerDetailsTitleAndLoader from "../../components/customer-details-form/customer-details-title-and-loader.component";
import CustomerDetailsForm from "../../components/customer-details-form/customer-details-form.component";

import { Container } from "../../styles/container/container.styles";
import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";
import NoCustomerDetailsFound from "./no-customer-details-found.component";

const EditCustomer = () => {
  const { customerDetails } = useGetCustomerDetailsManagementSelectors();

  useEditCustomerResultSwalUseEffect();

  console.log(customerDetails);
  return (
    <Container>
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

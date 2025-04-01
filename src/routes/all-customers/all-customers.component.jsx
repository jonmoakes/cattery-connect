import useAllCustomersListener from "./all-customers-hooks/use-all-customers-listener";
import useGetAllCustomersThunkUseEffect from "../../hooks/use-get-all-customers-thunk-use-effect";
import useDeleteCustomerResultSwalUseEffect from "./all-customers-hooks/use-delete-customer-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import AllCustomersLoader from "./all-customers-loader.component";
import TitleAndAddCustomerLink from "./title-and-add-customer-link.component";
import AllCustomersTable from "./all-customers-table.component";

import { Container } from "../../styles/container/container.styles";

const AllCustomers = () => {
  useAllCustomersListener();
  useGetAllCustomersThunkUseEffect();
  useDeleteCustomerResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - All Customers"
        description="View and manage all customers registered in your cattery. Access customer and their cat details, and contact information."
      />
      <AllCustomersLoader />
      <TitleAndAddCustomerLink />
      <AllCustomersTable />
    </Container>
  );
};

export default AllCustomers;

import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetDeleteCustomerSelectors from "../../hooks/selectors/use-get-delete-customer-selectors";

import useAllCustomersListener from "./all-customers-hooks/use-all-customers-listener";
import useGetAllCustomersThunkUseEffect from "./all-customers-hooks/use-get-all-customers-thunk-use-effect";
import useDeleteCustomerResultSwalUseEffect from "./all-customers-hooks/use-delete-customer-result-swal-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import TitleAndAddCustomerLink from "./title-and-add-customer-link.component";
import AllCustomersTable from "./all-customers-table.component";

import { Container } from "../../styles/container/container.styles";

const AllCustomers = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomersSelectors();
  const { deleteCustomerIsLoading } = useGetDeleteCustomerSelectors();
  useAllCustomersListener();
  useGetAllCustomersThunkUseEffect();
  useDeleteCustomerResultSwalUseEffect();

  return (
    <Container>
      {getAllCustomersIsLoading || deleteCustomerIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : "Deleting Customer..."
          }
        />
      ) : (
        <>
          <TitleAndAddCustomerLink />
          <AllCustomersTable />
        </>
      )}
    </Container>
  );
};

export default AllCustomers;

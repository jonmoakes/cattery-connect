import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import useAllCustomersListener from "./all-customers-hooks/use-all-customers-listener";
import useGetAllCustomersThunkUseEffect from "../../hooks/use-get-all-customers-thunk-use-effect";
import useDeleteCustomerResultSwalUseEffect from "./all-customers-hooks/use-delete-customer-result-swal-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import TitleAndAddCustomerLink from "./title-and-add-customer-link.component";
import AllCustomersTable from "./all-customers-table.component";

import { Container } from "../../styles/container/container.styles";

const AllCustomers = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomersSelectors();
  const { customerDetailsManagementIsLoading } =
    useGetCustomerDetailsManagementSelectors();
  useAllCustomersListener();
  useGetAllCustomersThunkUseEffect();
  useDeleteCustomerResultSwalUseEffect();

  return (
    <Container>
      {getAllCustomersIsLoading || customerDetailsManagementIsLoading ? (
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

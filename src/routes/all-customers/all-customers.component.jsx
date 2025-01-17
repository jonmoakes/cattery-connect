import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetDeleteCustomerSelectors from "../../hooks/selectors/use-get-delete-customer-selectors";
import useAllCustomersListener from "./all-customers-hooks/use-all-customers-listener";
import useGetAllCustomersThunkUseEffect from "./all-customers-hooks/use-get-all-customers-thunk-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import AllCustomersTable from "./all-customers-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const AllCustomers = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomersSelectors();
  const { deleteCustomerIsLoading } = useGetDeleteCustomerSelectors();
  useAllCustomersListener();
  useGetAllCustomersThunkUseEffect();

  return (
    <Container>
      <ParentDiv>
        <h1>your customers</h1>
      </ParentDiv>
      {getAllCustomersIsLoading || deleteCustomerIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : "Deleting Customer..."
          }
        />
      ) : (
        <AllCustomersTable />
      )}
    </Container>
  );
};

export default AllCustomers;

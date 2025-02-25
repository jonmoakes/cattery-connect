import useGetAllCustomersSelectors from "../../hooks/selectors/use-get-all-customers-selectors";
import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

const AllCustomersLoader = () => {
  const { getAllCustomersIsLoading } = useGetAllCustomersSelectors();
  const { customerDetailsManagementIsLoading, deleteCustomersCatsIsLoading } =
    useGetCustomerDetailsManagementSelectors();

  return (
    <>
      {getAllCustomersIsLoading ||
      customerDetailsManagementIsLoading ||
      deleteCustomersCatsIsLoading ? (
        <SkeletonBox
          loadingText={
            getAllCustomersIsLoading
              ? "Fetching Customers..."
              : customerDetailsManagementIsLoading
              ? "Deleting Customer..."
              : deleteCustomersCatsIsLoading && "deleting customers cats..."
          }
        />
      ) : null}
    </>
  );
};

export default AllCustomersLoader;

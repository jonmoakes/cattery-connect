import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import useViewCustomersCatsVariables from "./view-customers-cats-hooks/use-view-customers-cats-variables";

const ViewCustomersCatsLoader = () => {
  const { catDetailManagementIsLoading, individualCustomersCatsIsLoading } =
    useViewCustomersCatsVariables();

  return (
    <>
      {catDetailManagementIsLoading || individualCustomersCatsIsLoading ? (
        <SkeletonBox
          loadingText={
            catDetailManagementIsLoading
              ? "deleting cat..."
              : individualCustomersCatsIsLoading && "Fetching Customers Cats..."
          }
        />
      ) : null}
    </>
  );
};

export default ViewCustomersCatsLoader;

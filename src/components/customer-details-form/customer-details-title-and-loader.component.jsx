import { useLocation } from "react-router-dom";
import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { addCustomerRoute } from "../../strings/routes";

const CustomerDetailsTitleAndLoader = () => {
  const { customerDetailsManagementIsLoading } =
    useGetCustomerDetailsManagementSelectors();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {customerDetailsManagementIsLoading ? (
        <SkeletonBox
          loadingText={
            path === addCustomerRoute
              ? "creating customer"
              : "updating customer"
          }
        />
      ) : null}
      <ParentDiv>
        <h1>{path === addCustomerRoute ? "add" : "edit"} customer</h1>
      </ParentDiv>
    </>
  );
};

export default CustomerDetailsTitleAndLoader;

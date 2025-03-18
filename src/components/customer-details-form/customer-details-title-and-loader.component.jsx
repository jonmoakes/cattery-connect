import { useLocation } from "react-router-dom";
import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { addCustomerRoute } from "../../strings/routes";

const CustomerDetailsTitleAndLoader = () => {
  const { customerDetailsManagementIsLoading, name } =
    useGetCustomerDetailsManagementSelectors();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {customerDetailsManagementIsLoading ? (
        <SkeletonBox
          loadingText={
            path === addCustomerRoute
              ? `adding ${name}...`
              : `updating ${name}...`
          }
        />
      ) : null}
      <ParentDiv>
        <CustomBalancedText type="h1">
          {path === addCustomerRoute
            ? name
              ? `Add ${name}`
              : "Add Customer"
            : name
            ? `Edit ${name}`
            : "Edit Details"}
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};

export default CustomerDetailsTitleAndLoader;

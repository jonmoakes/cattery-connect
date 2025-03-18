import { useLocation } from "react-router-dom";

import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  addCustomerRoute,
  signedInCustomersDetailsRoute,
} from "../../strings/routes";
import { getFirstNameFromString } from "../../functions/get-first-name-from-string";

const UploadCustomerDetailsButton = () => {
  const { name } = useGetCustomerDetailsManagementSelectors();
  const location = useLocation();
  const path = location.pathname;
  const fromRoute = location.state?.fromRoute;

  return (
    <>
      <BlackHr />
      <Button type="submit" className="submit">
        {fromRoute && fromRoute === signedInCustomersDetailsRoute
          ? "update details"
          : !fromRoute && path === addCustomerRoute
          ? "add"
          : "update"}{" "}
        {fromRoute
          ? null
          : name
          ? getFirstNameFromString(name)
          : fromRoute === signedInCustomersDetailsRoute
          ? "your details"
          : "customer"}
      </Button>
    </>
  );
};

export default UploadCustomerDetailsButton;

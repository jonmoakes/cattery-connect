import { useLocation } from "react-router-dom";

import useGetCustomerDetailsManagementSelectors from "../../hooks/selectors/use-get-customer-details-management-selectors";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCustomerRoute } from "../../strings/routes";

const UploadCustomerDetailsButton = () => {
  const { name } = useGetCustomerDetailsManagementSelectors();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BlackHr />
      <Button type="submit" className="submit">
        {path === addCustomerRoute ? "add" : "update"}{" "}
        {name ? name : "customer"}
      </Button>
    </>
  );
};

export default UploadCustomerDetailsButton;

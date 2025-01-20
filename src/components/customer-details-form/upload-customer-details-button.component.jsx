import { useLocation } from "react-router-dom";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCustomerRoute } from "../../strings/routes";

const UploadCustomerDetailsButton = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BlackHr />
      <Button type="submit" className="submit">
        {path === addCustomerRoute ? "add" : "update"} customer
      </Button>
    </>
  );
};

export default UploadCustomerDetailsButton;

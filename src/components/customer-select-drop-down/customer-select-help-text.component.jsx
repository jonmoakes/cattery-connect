import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { StyledLink } from "../../styles/link/link.styles";

import {
  addBookingRoute,
  addCatChooseOwnerRoute,
  allCustomersRoute,
} from "../../strings/routes";
import { useLocation } from "react-router-dom";

const CustomerSelectHelpText = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <CustomBalancedText>
        to{" "}
        {path === addCatChooseOwnerRoute
          ? "add a cat, please first select the owner of the cat."
          : path === addBookingRoute &&
            "add a booking, please first select the cats owner."}
      </CustomBalancedText>
      <CustomBalancedText>
        tap in the box and then either type the customers name or customer ID (
        you can find this in the{" "}
        <StyledLink className="yellow" to={allCustomersRoute}>
          Customers table
        </StyledLink>{" "}
        ).
      </CustomBalancedText>
      <CustomBalancedText>
        then select the customer from the list.
      </CustomBalancedText>
    </>
  );
};

export default CustomerSelectHelpText;

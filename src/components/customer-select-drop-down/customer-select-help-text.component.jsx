import { useLocation } from "react-router-dom";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { StyledLink } from "../../styles/link/link.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import {
  addBookingRoute,
  addCatChooseOwnerRoute,
  allCustomersRoute,
} from "../../strings/routes";

const CustomerSelectHelpText = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <CustomBalancedText className="white">
        to{" "}
        {path === addCatChooseOwnerRoute
          ? "add a cat, please first select the owner of the cat."
          : path === addBookingRoute &&
            "add a booking, please first select the cats owner."}
      </CustomBalancedText>
      <CustomBalancedText className="white">
        tap in the box and then either type the customers name or customer ID (
        you can find this in the{" "}
        <StyledLink className="yellow" to={allCustomersRoute}>
          Customers table
        </StyledLink>{" "}
        ).
      </CustomBalancedText>
      <CustomBalancedText className="white">
        then select the customer from the list.
      </CustomBalancedText>
      <BlackHr />
    </>
  );
};

export default CustomerSelectHelpText;

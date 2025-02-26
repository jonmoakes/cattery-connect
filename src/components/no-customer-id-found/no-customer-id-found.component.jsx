import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../custom-span/custom-span.component";

import { ParentDiv } from "../../styles/div/div.styles";

import {
  addCatRoute,
  allCatsRoute,
  allCustomersRoute,
  editCatRoute,
  viewCustomersCatsRoute,
} from "../../strings/routes";
import { useLocation } from "react-router-dom";

const NoCustomerIdFound = () => {
  const location = useLocation();
  const path = location.pathname;

  const infoText =
    path === addCatRoute
      ? "add a cat."
      : path === editCatRoute
      ? "edit the cat."
      : path === viewCustomersCatsRoute && "show the customers cats.";

  return (
    <>
      <ParentDiv>
        <CustomBalancedText>
          sorry, we couldn't find the data we needed to {infoText}.
        </CustomBalancedText>
        <CustomBalancedText>
          have you used the browsers back and forward buttons to leave and then
          return to this page?
        </CustomBalancedText>
        <CustomBalancedText>or have you reloaded the page?</CustomBalancedText>
        <CustomBalancedText>
          we fetch the cats based on the customers ID which is lost when the
          browsers backward and forward buttons are used.
        </CustomBalancedText>
        <CustomBalancedText>
          please go back to the{" "}
          <CustomSpan type="link" to={allCustomersRoute}>
            customers table
          </CustomSpan>{" "}
          and select the
          <br />' View [customer name's] cats'
          <br />
          button again.
        </CustomBalancedText>
        <CustomBalancedText>
          alternately, you can go to the{" "}
          <CustomSpan type="link" to={allCatsRoute}>
            all cats
          </CustomSpan>{" "}
          table and choose 'add a cat' button.
        </CustomBalancedText>
      </ParentDiv>
    </>
  );
};
export default NoCustomerIdFound;

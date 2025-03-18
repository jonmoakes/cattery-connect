import { useLocation } from "react-router-dom";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";
import { ParentDiv } from "../../styles/div/div.styles";
import {
  allCustomersRoute,
  signedInCustomersDetailsRoute,
} from "../../strings/routes";

const NoCustomerDetailsFound = () => {
  const { state } = useLocation();
  const fromRoute = state?.fromRoute;
  const isCustomerView = !fromRoute;

  return (
    <ParentDiv>
      <CustomBalancedText>
        Sorry, we couldn't find {isCustomerView ? "the customer " : "your"}{" "}
        details.
      </CustomBalancedText>
      <CustomBalancedText>
        Have you used the browser’s back or forward buttons to leave and then
        return to this page?
      </CustomBalancedText>
      <CustomBalancedText>Or did you reload the page?</CustomBalancedText>
      <CustomBalancedText>
        We pass {isCustomerView ? "the customer " : "your"} details to edit when
        you click the edit {isCustomerView ? "customer " : "details"} button.
      </CustomBalancedText>
      <CustomBalancedText>
        This data is lost when the browser's backward, forward, or reload
        buttons are used.
      </CustomBalancedText>
      <CustomBalancedText>
        Please go back to the{" "}
        <CustomSpan
          type="link"
          to={
            isCustomerView ? allCustomersRoute : signedInCustomersDetailsRoute
          }
        >
          {isCustomerView ? "customers table" : "details page"}
        </CustomSpan>{" "}
        and select the{" "}
        {isCustomerView
          ? "customer you wish to edit again."
          : "edit details button again"}
        .
      </CustomBalancedText>
    </ParentDiv>
  );
};

export default NoCustomerDetailsFound;

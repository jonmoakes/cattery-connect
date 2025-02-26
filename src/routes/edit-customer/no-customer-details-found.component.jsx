import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { allCustomersRoute } from "../../strings/routes";

const NoCustomerDetailsFound = () => (
  <>
    <ParentDiv>
      <CustomBalancedText>
        sorry, we couldn't find the customer details.
      </CustomBalancedText>
      <CustomBalancedText>
        have you used the browsers back and forward buttons to leave and then
        return to this page?
      </CustomBalancedText>
      <CustomBalancedText>or did you reload the page?</CustomBalancedText>
      <CustomBalancedText>
        we pass the customer data to edit when you click on the edit customer
        button.
      </CustomBalancedText>
      <CustomBalancedText>
        this data is lost when the browsers backward / forward / reload buttons
        are used.
      </CustomBalancedText>
      <CustomBalancedText>
        please go back to the{" "}
        <CustomSpan type="link" to={allCustomersRoute}>
          customers table
        </CustomSpan>{" "}
        and select the customer you wish to edit again.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default NoCustomerDetailsFound;

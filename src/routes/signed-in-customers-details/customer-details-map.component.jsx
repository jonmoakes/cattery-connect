import { Fragment } from "react";

import useGetSignedInCustomersDetailsSelectors from "../../hooks/selectors/use-get-signed-in-customers-details-selectors";
import useSignedInCustomersDetailsFunctions from "./hooks/use-signed-in-customers-details-functions";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../components/custom-span/custom-span.component";

import {
  ParentDiv,
  SignedInCustomersDetailsDiv,
} from "../../styles/div/div.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Button } from "../../styles/button/button.styles";

const CustomerDetailsMap = () => {
  const { customerDetailsFoUi } = useGetSignedInCustomersDetailsSelectors();
  const { getLabel, handleEditDetailsNavigation } =
    useSignedInCustomersDetailsFunctions();

  return (
    <ParentDiv>
      <SignedInCustomersDetailsDiv>
        {Object.entries(customerDetailsFoUi).map(([label, value]) => (
          <Fragment key={label}>
            <CustomBalancedText>
              <CustomSpan className="red">{getLabel(label)}:</CustomSpan>
              <br />
              {label === "email" ? (
                <CustomSpan type="lowercase">{value}</CustomSpan>
              ) : (
                value
              )}
            </CustomBalancedText>
            <BlackHr />
          </Fragment>
        ))}
      </SignedInCustomersDetailsDiv>
      <Button className="teal" onClick={handleEditDetailsNavigation}>
        edit details
      </Button>
    </ParentDiv>
  );
};

export default CustomerDetailsMap;

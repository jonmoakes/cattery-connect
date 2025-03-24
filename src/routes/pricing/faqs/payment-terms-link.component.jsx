import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import { paymentTermsRoute } from "../../../strings/routes";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";

const PaymentTermsLink = () => (
  <>
    <BlackHr />
    <CustomBalancedText type="h3">full payment terms</CustomBalancedText>
    <CustomBalancedText>
      please see the{" "}
      <StyledLink to={paymentTermsRoute}>
        full payment terms & conditions
      </StyledLink>{" "}
      for full details.
    </CustomBalancedText>
    <BlackHr />
  </>
);

export default PaymentTermsLink;

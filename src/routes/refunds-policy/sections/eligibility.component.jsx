import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";
import CustomSpan from "../../../components/custom-span/custom-span.component";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Eligibility = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">eligibility:</CustomBalancedText>
    <CustomBalancedText type="h3">
      initial Cancellation Period:
    </CustomBalancedText>
    <CustomBalancedText>
      You have the right to cancel your subscription within 14 days of purchase
      without providing a reason.
    </CustomBalancedText>{" "}
    <CustomBalancedText>
      If you cancel within this period, you will be entitled to a full refund.
      To request a cancellation, please contact me using the details further
      down this page under the heading{" "}
      <CustomSpan className="red">process</CustomSpan>.
    </CustomBalancedText>
    <CustomBalancedText>
      After 14 days, the subscription will be considered non-refundable, and
      cancellations will be subject to our refund policy.
    </CustomBalancedText>
    <BlackHr />
    <CustomBalancedText>
      At Cattery Connect, refunds are managed directly between the owner and the
      administrator.{" "}
    </CustomBalancedText>
    <CustomBalancedText>
      {" "}
      Customers who book services through the app should contact the respective
      service owner for any queries related to payments or refunds.
    </CustomBalancedText>
    <CustomBalancedText>
      This policy outlines the conditions under which owners can request a
      refund and the procedures involved in processing these requests.
    </CustomBalancedText>
    <BlackHr />
  </ParentDiv>
);

export default Eligibility;

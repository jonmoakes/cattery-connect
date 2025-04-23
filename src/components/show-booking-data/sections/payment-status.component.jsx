import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

import { addBookingRoute } from "../../../strings/routes";

const PaymentStatus = ({ path, paymentStatus }) => (
  <>
    {path === addBookingRoute ? (
      <>
        <li>
          payment status:
          <br />
          <CustomSpan className="yellow">{paymentStatus}</CustomSpan>
        </li>
        <BlackHr />
      </>
    ) : null}
  </>
);

export default PaymentStatus;

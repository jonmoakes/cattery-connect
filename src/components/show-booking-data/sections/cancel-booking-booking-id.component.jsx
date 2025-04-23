import CustomSpan from "../../custom-span/custom-span.component";

import { cancelBookingRoute } from "../../../strings/routes";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CancelBookingBookingId = ({ path, bookingId }) => (
  <>
    {path === cancelBookingRoute ? (
      <>
        <li>
          booking ID
          <br /> <CustomSpan className="yellow">{bookingId}</CustomSpan>
        </li>
        <BlackHr />
      </>
    ) : null}
  </>
);

export default CancelBookingBookingId;

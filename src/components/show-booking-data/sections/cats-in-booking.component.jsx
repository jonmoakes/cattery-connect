import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

import { addBookingRoute, cancelBookingRoute } from "../../../strings/routes";

const CatsInBooking = ({ path, catsInBooking }) => (
  <>
    <li>
      cats in the booking:
      <br />
      <CustomSpan className="yellow">
        {path === addBookingRoute && catsInBooking
          ? catsInBooking.map((str) => str.split(" ")).join(", ")
          : path === cancelBookingRoute && catsInBooking}
      </CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CatsInBooking;

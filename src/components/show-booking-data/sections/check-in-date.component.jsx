import { format } from "date-fns";

import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

const CheckInDate = ({ checkInDate }) => (
  <>
    <li>
      check in date:
      <br />
      <CustomSpan className="yellow">
        {format(checkInDate, "EEE dd MMMM yyyy")}
      </CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CheckInDate;

import { format } from "date-fns";

import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

const CheckOutDate = ({ checkOutDate }) => (
  <>
    <li>
      check out date:
      <br />
      <CustomSpan className="yellow">
        {format(checkOutDate, "EEE dd MMMM yyyy")}
      </CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CheckOutDate;

import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

const CheckInSlot = ({ checkInSlot }) => (
  <>
    <li>
      check in slot:
      <br />
      <CustomSpan type="uppercase" className="yellow">
        {checkInSlot}
      </CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CheckInSlot;

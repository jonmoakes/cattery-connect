import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

const CheckOutSlot = ({ checkOutSlot }) => (
  <>
    <li>
      check out slot:
      <br />
      <CustomSpan type="uppercase" className="yellow">
        {checkOutSlot}
      </CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CheckOutSlot;

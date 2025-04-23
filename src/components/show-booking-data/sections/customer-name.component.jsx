import CustomSpan from "../../custom-span/custom-span.component";

import { BlackHr } from "../../../styles/hr/hr.styles";

const CustomerName = ({ customerName }) => (
  <>
    <li>
      customer name:
      <br />
      <CustomSpan className="yellow">{customerName}</CustomSpan>
    </li>
    <BlackHr />
  </>
);

export default CustomerName;

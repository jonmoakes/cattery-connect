import CustomSpan from "../../custom-span/custom-span.component";
import AdditionalCosts from "./additional-costs.component";

import { addBookingRoute } from "../../../strings/routes";

const CostOfBooking = ({
  path,
  hasAdditionalCosts,
  totalCost,
  additionalCosts,
}) => (
  <>
    {path === addBookingRoute && hasAdditionalCosts ? (
      <>
        <li>
          cost of booking:
          <br />
          <CustomSpan className="yellow">
            £{(totalCost / 100).toFixed(2)}
          </CustomSpan>
        </li>

        <AdditionalCosts {...{ additionalCosts }} />
      </>
    ) : null}
  </>
);

export default CostOfBooking;

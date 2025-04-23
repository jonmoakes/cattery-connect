import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";

import { cancelBookingRoute } from "../../../strings/routes";

const CancelBookingProceed = ({ path }) => (
  <>
    {path === cancelBookingRoute ? (
      <>
        <CustomBalancedText>
          if you wish to proceed with the cancellation, tap the 'confirm cancel'
          button below.
        </CustomBalancedText>
        <CustomBalancedText>
          please note that the data is not recoverable once deleted.
        </CustomBalancedText>
      </>
    ) : null}
  </>
);

export default CancelBookingProceed;

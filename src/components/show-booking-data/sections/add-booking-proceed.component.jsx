import { addBookingRoute } from "../../../strings/routes";
import CustomBalancedText from "../../custom-balanced-text/custom-balanced-text.component";

const AddBookingProceed = ({
  path,
  managesOwnPens,
  hasAdditionalCosts,
  additionalCosts,
}) => (
  <>
    {path === addBookingRoute ? (
      <>
        {managesOwnPens ? (
          <>
            <CustomBalancedText>
              if you are happy with these details, tap the 'complete booking'
              button below.
            </CustomBalancedText>
            <CustomBalancedText>
              otherwise, change any data in the form above and then come back to
              this point.
            </CustomBalancedText>
          </>
        ) : (
          <>
            <CustomBalancedText>
              if you are happy with these details, tap the 'check availability'
              button below.
            </CustomBalancedText>
            <CustomBalancedText>
              if availability is confirmed, you will have chance to confirm
              again before making the booking.
            </CustomBalancedText>
          </>
        )}
        {hasAdditionalCosts && additionalCosts > "0" ? (
          <CustomBalancedText className="yellow">
            please double check that the total cost of the booking is correct
            now that you have added additional costs.
          </CustomBalancedText>
        ) : null}
      </>
    ) : null}
  </>
);

export default AddBookingProceed;

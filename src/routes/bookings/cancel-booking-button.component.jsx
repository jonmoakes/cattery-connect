import useBookingsFunctions from "./bookings-hooks/use-bookings-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { ErrorDiv, TableOptionsButtonDiv } from "../../styles/div/div.styles";
import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";

const CancelBookingButton = ({ chosenEntry }) => {
  const { passDataAndNavigateToCancelBookingRoute } = useBookingsFunctions();
  const paymentStatus = chosenEntry && chosenEntry.paymentStatus;

  return (
    <>
      {!chosenEntry ? null : chosenEntry && paymentStatus === "complete" ? (
        <ErrorDiv className="cancel-booking">
          <CustomBalancedText>
            payments that are marked as complete cannot be cancelled.
          </CustomBalancedText>
        </ErrorDiv>
      ) : (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="delete"
            type="button"
            onClick={() => passDataAndNavigateToCancelBookingRoute(chosenEntry)}
          >
            cancel booking
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      )}
    </>
  );
};

export default CancelBookingButton;

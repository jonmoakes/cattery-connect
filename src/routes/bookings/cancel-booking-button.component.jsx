import useBookingsFunctions from "./bookings-hooks/use-bookings-functions";

import { EntryOptionsButton } from "../../styles/button/button.styles";
import { TableOptionsButtonDiv } from "../../styles/div/div.styles";

const CancelBookingButton = ({ chosenEntry }) => {
  const { passDataAndNavigateToCancelBookingRoute } = useBookingsFunctions();

  return (
    <>
      {chosenEntry ? (
        <TableOptionsButtonDiv>
          <EntryOptionsButton
            className="delete"
            type="button"
            onClick={() => passDataAndNavigateToCancelBookingRoute(chosenEntry)}
          >
            cancel booking
          </EntryOptionsButton>
        </TableOptionsButtonDiv>
      ) : null}
    </>
  );
};

export default CancelBookingButton;

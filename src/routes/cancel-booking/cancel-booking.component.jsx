import useFetchAvailabilityDocsToUpdateThunkUseEffect from "./cancel-booking-hooks/use-fetch-availability-docs-to-update-thunk-use-effect";
import useCancelBookingResultSwalUseEffect from "./cancel-booking-hooks/use-cancel-booking-result-swal-use-effect";

import useCancelBookingVariables from "./cancel-booking-hooks/use-cancel-booking-variables";
import useCancelBookingFunctions from "./cancel-booking-hooks/use-cancel-booking-functions";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoBookingDataFound from "./no-booking-data-found.component";
import ShowBookingData from "../../components/show-booking-data/show-booking-data.component";

import { Container } from "../../styles/container/container.styles";
import { Button } from "../../styles/button/button.styles";

const CancelBooking = () => {
  const {
    fetchAvailabilityDocsToUpdateError,
    hasDataPassedFromBookingsTable,
    bookingDataToShow,
  } = useCancelBookingVariables();
  const { confirmCancelBooking } = useCancelBookingFunctions();
  useFetchAvailabilityDocsToUpdateThunkUseEffect();
  useCancelBookingResultSwalUseEffect();

  return (
    <Container>
      {fetchAvailabilityDocsToUpdateError ? (
        <ShowFetchErrors />
      ) : !hasDataPassedFromBookingsTable ? (
        <NoBookingDataFound />
      ) : (
        <>
          <ShowBookingData {...{ bookingDataToShow }} />
          <Button type="button" className="red" onClick={confirmCancelBooking}>
            confirm cancel
          </Button>
        </>
      )}
    </Container>
  );
};

export default CancelBooking;

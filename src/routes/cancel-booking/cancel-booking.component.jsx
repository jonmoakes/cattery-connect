import useFetchAvailabilityDocsToUpdateThunkUseEffect from "./cancel-booking-hooks/use-effects/use-fetch-availability-docs-to-update-thunk-use-effect";
import useCancelBookingResultSwalUseEffect from "./cancel-booking-hooks/use-effects/use-cancel-booking-result-swal-use-effect";

import useCancelBookingVariables from "./cancel-booking-hooks/use-cancel-booking-variables";
import useCancelBookingFunctions from "./cancel-booking-hooks/use-cancel-booking-functions";

import CancelBookingTitleAndLoader from "./cancel-booking-title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoBookingDataFound from "./no-booking-data-found.component";
import ShowBookingData from "../../components/show-booking-data/show-booking-data.component";

import { Container } from "../../styles/container/container.styles";
import { Button } from "../../styles/button/button.styles";
import { Form } from "../../styles/form/form.styles";
import useCancelBookingSendEmailResultSwalUseEffect from "./cancel-booking-hooks/use-effects/use-cancel-booking-send-email-result-swal-use-effect";

const CancelBooking = () => {
  const {
    fetchAvailabilityDocsToUpdateError,
    hasDataPassedFromBookingsTable,
    bookingDataToShow,
    requiredCatteryDataError,
  } = useCancelBookingVariables();
  const { confirmCancelBooking } = useCancelBookingFunctions();

  useFetchAvailabilityDocsToUpdateThunkUseEffect();
  useCancelBookingResultSwalUseEffect();
  useCancelBookingSendEmailResultSwalUseEffect();

  return (
    <Container>
      <CancelBookingTitleAndLoader />

      {fetchAvailabilityDocsToUpdateError || requiredCatteryDataError ? (
        <ShowFetchErrors />
      ) : !hasDataPassedFromBookingsTable ? (
        <NoBookingDataFound />
      ) : (
        <Form onSubmit={confirmCancelBooking}>
          <ShowBookingData {...{ bookingDataToShow }} />
          <Button type="submit" className="red cancel">
            confirm cancel
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default CancelBooking;

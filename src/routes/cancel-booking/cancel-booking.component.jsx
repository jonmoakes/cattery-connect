import useGetCancelBookingSelectors from "../../hooks/selectors/use-get-cancel-booking-selectors";
import useGetRequiredCatteryDataForBookingSelectors from "../../hooks/selectors/use-get-required-cattery-data-for-booking-selectors";

import useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect from "./cancel-booking-hooks/use-effects/use-fetch-cattery-details-and-availability-docs-to-update-thunk-use-effect";
import useCancelBookingResultSwalUseEffect from "./cancel-booking-hooks/use-effects/use-cancel-booking-result-swal-use-effect";
import useCancelBookingSendEmailResultSwalUseEffect from "./cancel-booking-hooks/use-effects/use-cancel-booking-send-email-result-swal-use-effect";

import useGetBookingDataToShow from "./cancel-booking-hooks/use-get-booking-data-to-show";
import useConfirmCancelBooking from "./cancel-booking-hooks/use-confirm-cancel-booking";

import CancelBookingTitleAndLoader from "./cancel-booking-title-and-loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoBookingDataFound from "./no-booking-data-found.component";
import ShowBookingData from "../../components/show-booking-data/show-booking-data.component";

import { Container } from "../../styles/container/container.styles";
import { Button } from "../../styles/button/button.styles";
import { Form } from "../../styles/form/form.styles";

const CancelBooking = () => {
  const { bookingDataToShow } = useGetBookingDataToShow();
  const { fetchAvailabilityDocsToUpdateError, hasBookingToCancelData } =
    useGetCancelBookingSelectors();
  const { requiredCatteryDataError } =
    useGetRequiredCatteryDataForBookingSelectors();
  const { confirmCancelBooking } = useConfirmCancelBooking();

  useFetchCatteryDetailsAvailabilityDocsToUpdateThunkUseEffect();
  useCancelBookingResultSwalUseEffect();
  useCancelBookingSendEmailResultSwalUseEffect();

  return (
    <Container>
      <CancelBookingTitleAndLoader />

      {fetchAvailabilityDocsToUpdateError || requiredCatteryDataError ? (
        <ShowFetchErrors />
      ) : !hasBookingToCancelData ? (
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

import useFetchAvailabilityDocsToUpdateThunkUseEffect from "./cancel-booking-hooks/use-fetch-availability-docs-to-update-thunk-use-effect";

import useCancelBookingVariables from "./cancel-booking-hooks/use-cancel-booking-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import NoBookingDataFound from "./no-booking-data-found.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import ShowBookingData from "../../components/show-booking-data/show-booking-data.component";

const CancelBooking = () => {
  const { hasDataPassedFromBookingsTable, bookingDataToShow } =
    useCancelBookingVariables();
  useFetchAvailabilityDocsToUpdateThunkUseEffect();

  return (
    <Container>
      <ParentDiv>
        <CustomBalancedText type="h1">cancel booking</CustomBalancedText>
      </ParentDiv>

      {!hasDataPassedFromBookingsTable ? (
        <NoBookingDataFound />
      ) : (
        <ShowBookingData {...{ bookingDataToShow }} />
      )}
    </Container>
  );
};

export default CancelBooking;

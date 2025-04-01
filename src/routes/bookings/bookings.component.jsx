import useBookingsListener from "./bookings-hooks/use-bookings-listener";

import useFetchOwnerBookingsThunkUseEffect from "./bookings-hooks/use-effects/use-fetch-owner-bookings-thunk-use-effect";
import useUpdatePaymentStatusResultSwalUseEffect from "./bookings-hooks/use-effects/use-update-payment-status-result-swal-use-effect";

import Metadata from "../../components/metadata/metadata.component";
import BookingsLoader from "./booking-loader.component";
import TitleAndAddBookingLink from "./title-and-add-booking-link.component";
import BookingsTable from "./bookings-table.component";

import { Container } from "../../styles/container/container.styles";

const Bookings = () => {
  useBookingsListener();
  useFetchOwnerBookingsThunkUseEffect();
  useUpdatePaymentStatusResultSwalUseEffect();

  return (
    <Container>
      <Metadata
        title="Cattery Connect - Bookings"
        description="View and manage all cattery bookings in one place. Track reservations, update statuses, and keep your schedule organised."
      />
      <BookingsLoader />
      <TitleAndAddBookingLink />
      <BookingsTable />
    </Container>
  );
};

export default Bookings;

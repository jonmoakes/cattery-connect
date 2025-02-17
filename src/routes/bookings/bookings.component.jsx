import useGetBookingsSelectors from "../../hooks/selectors/use-get-bookings-selectors";
import useFetchOwnerBookingsThunkUseEffect from "./bookings-hooks/use-fetch-owner-bookings-thunk-use-effect";
import { Container } from "../../styles/container/container.styles";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import TitleAndAddBookingLink from "./title-and-add-booking-link.component";

import BookingsTable from "./bookings-table.component";
import useBookingsListener from "./bookings-hooks/use-bookings-listener";

const Bookings = () => {
  const { fetchOwnerBookingsIsLoading } = useGetBookingsSelectors();

  useBookingsListener();
  useFetchOwnerBookingsThunkUseEffect();

  return (
    <Container>
      {fetchOwnerBookingsIsLoading ? (
        <SkeletonBox loadingText="fetching bookings..." />
      ) : (
        <>
          <TitleAndAddBookingLink />
          <BookingsTable />
        </>
      )}
    </Container>
  );
};

export default Bookings;
